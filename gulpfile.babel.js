import gulp from 'gulp';
import watch from 'gulp-watch';
import sass from 'gulp-sass';
import rename from 'gulp-rename';

import clean from 'gulp-clean';
import uglify from 'gulp-terser';
import minifyIMG from 'gulp-imagemin';
import minifyCSS from 'gulp-minify-css';
import minifyHTML from 'gulp-html-minifier';

import plumber from 'gulp-plumber';

import gulpserve from 'gulp-webserver';

// Error Handler
const onError = err => { console.log(err) };

// CLEAN
const cleanPublic = () => {
	return gulp.src("./client/public/")
		.pipe(clean());
};

// JAVASCRIPT
const clientJS = () => {
	return gulp.src("./client/src/assets/js/main.js")
		.pipe(plumber({ errorHandler: onError }))
		.pipe(uglify())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest("./client/public"));
};

// SASS
const clientSass = () => {
	return gulp.src("./client/src/assets/scss/style.scss")
		.pipe(plumber({ errorHandler: onError }))
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest("./client/public"));
};

// IMAGES
const clientImage = () => {
	return gulp.src("./client/src/assets/images/**/*")
		.pipe(plumber({ errorHandler: onError }))
		.pipe(minifyIMG([
			minifyIMG.gifsicle({ interlaced: true }),
			minifyIMG.jpegtran({ progressive: true }),
			minifyIMG.optipng({ optimizationLevel: 5 }),
			minifyIMG.svgo({ plugins: [{ removeViewBox: true }] })
		], {
			interlaced: true,
			progressive: true,
			optimizationLevel: 5,
			svgoPlugins: [{ removeViewBox: true }],
			verbose: true
		}))
		.pipe(gulp.dest("./client/public/assets/images"))
};

const clientFonts = () => {
	return gulp.src("./client/src/assets/fonts/*.{ttf,woff,svg,eot}")
		.pipe(gulp.dest("./client/public/assets/fonts"))
};

// HTML
const clientHtml = () => {
	return gulp.src("./client/src/index.html")
		.pipe(plumber({ errorHandler: onError }))
		.pipe(minifyHTML({
			collapseWhitespace: true,
			removeComments: true,
			trimCustomFragments: true,
			removeEmptyAttributes: true,
			removeTagWhitespace: true,
			minifyJS: true
		}))
		.pipe(gulp.dest("./client/public"));
};

// Environment
export const clientEnv = () => {
	const env = (process.env.NODE_ENV || 'dev').trim();	

	return gulp.src(`./client/src/config/env.${env}.js`)
		.pipe(rename("environment.js"))
		.pipe(gulp.dest("./client/public"))
}

// Gulp Server
export const webserver = () => {
	return gulp.src("./client/public")
		.pipe(gulpserve({
			livereload: true,
			directoryListing: false,
			open: true,
			port: 4200
		}));
};


const client = gulp.series(clientHtml, clientJS, clientSass, clientImage, clientFonts, clientEnv);

// Compilador automático
const watchFiles = () => {
	watch('./client/src/assets/js/**/*.js',{verbose: true }, clientJS);
	watch('./client/src/assets/scss/*.scss',{verbose: true }, clientSass);
	watch('./client/src/index.html',{verbose: true }, clientHtml);
};

const build = gulp.series(cleanPublic, client);
export const dev = gulp.parallel(build, watchFiles, webserver);

export default build;
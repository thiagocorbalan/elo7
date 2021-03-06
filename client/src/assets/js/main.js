import config from './environment.js';

const mainApp = new Vue({
	el: '#mainApp',
	data: {
		jobs: []
	},
	mounted () {
		fetch(config.API)
		  .then(response => response.json() )
		  .then( jobs => {
			  this.jobs = jobs.vagas
		  })
	  }
})
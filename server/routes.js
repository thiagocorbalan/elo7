const routes = require('express').Router();
const jobs = require('./controllers/jobs.controller');


routes.get('/', (req, res) => {
  return res.json({ message: 'Server is running...'});
});

routes.get('/vagas', jobs.index);

module.exports = routes;

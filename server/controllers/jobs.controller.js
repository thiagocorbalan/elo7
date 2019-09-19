const jobsModel = require('../models/jobs.model');

module.exports = {
	/**
	 * Método que pega os dados tratados pelo model e devolve.
	 * @param {*} req 
	 * @param {*} res 
	 */
	async index(req, res){
		try{
			await jobsModel.get()
				.then( jobs => res.json(jobs))
				.catch(err => {
					if (err.status) {
						res.status(err.status).json({ message: err.message })
					} else {
						res.status(500).json({ message: err.message })
					}
				})

		}catch(Error){
			console.error(`Jobs.controller.index: ${Error}`);
			return res.json(response);
		}
	}

}
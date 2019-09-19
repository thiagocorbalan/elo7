const path = require("path");
const fs = require('fs');

module.exports = {	
	/**
	 * Método responsável por ler o json (supondo que seja um banco de dados), trata e devolve em formato json.
	 * É feito ainda uma verificação se caso não existir dados no json, a solicitação é rejeitada e devolvo uma mensagem para o client.
	 */
	get(){
		try{
			const rawdata = path.resolve(__dirname, "../db/db.json");
			
			const data = JSON.parse(fs.readFileSync(rawdata, 'utf8'));
			// Caso queiram testar o que acontece caso não tenha vaga e só descomentar a linha abaixo e comentar a linha acima.
			//const data = { vagas: [] } 

			return new Promise((resolve, reject) => {
				if (data.vagas.length <= 0) {
					reject({
						message: 'no jobs available',
						status: 202
					})
				}
				resolve(data);
			})

		}catch(Error){
			console.error(`Jobs.model.get: ${Error}`);
			return res.json(response);
		}
	}
}
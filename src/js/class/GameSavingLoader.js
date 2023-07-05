import json from '../modules/parser'

import read from '../modules/reader'

export default class GameSavingLoader {
	static load() {
		return new Promise((resolve) => {
			resolve(read())
		})
		.then(data => {
			return new Promise(resolve => {
				resolve(json(data))
			})
		})
		.then(jsonData => {
			return JSON.parse(jsonData)
		})
	}
}

GameSavingLoader.load()
.then(saving => {
		return new Promise ((resolve, reject) => {
			resolve(saving)
			reject(error)
		})
	}
)
.catch(error => {
	console.error(error)
})
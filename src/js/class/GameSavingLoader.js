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
				console.log(JSON.parse(jsonData))
				return JSON.parse(jsonData)
			})
	}
}

class GameSaving extends GameSavingLoader {
	
}
import json from '../modules/parser'

import read from '../modules/reader'


(async () => {
	try {
		const reader = await read();
		console.log(reader)
		const parse = await json(reader);
		return JSON.parse(parse)
	} catch(error) {
		console.log(error)
	}
})();


import json from '../modules/parser'

import read from '../modules/reader'


export default (async () => {
	try {
		const reader = await read();
		const parse = await json(reader);
		return console.log(JSON.parse(parse))
	} catch(error) {
		console.error(error)
	}
})();


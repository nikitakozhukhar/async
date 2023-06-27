import json from '../modules/parser'

import read from '../modules/reader'

export default class GameSavingLoader {
	static load() {
	  const data = read(); // возвращается Promise!
	  const value = json(data); // возвращается Promise!
	  return value;
	}
  }
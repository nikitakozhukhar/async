import GameSavingLoader from '../class/GameSavingLoader'

import * as async from '../class/asyncsave'

jest.setTimeout(15000);

test('should load saved game', (done) => {
	((data) => {
		expect(data).toEquale({
			created: 1546300800,
			id: 9,
			userInfo:
			{
				id: 1,
				level: 10,
				name: "Hitman",
				points: 2000
			}
		});
		done();
	})
})
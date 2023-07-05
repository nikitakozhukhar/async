import GameSavingLoader from '../class/GameSavingLoader'

// const loader = new GameSavingLoader();
jest.setTimeout(15000);

test('should load saved game', (done) => {

	return GameSavingLoader().load()
		.then(saving => {
			expect(saving).toEquale({
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
		}
		);
})
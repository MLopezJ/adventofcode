import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { getInfoFromGames } from './getInfoFromGames.js'

void describe('getInfoFromGames', () => {
	void it(`should return list of valid games and the sum of the IDs of those games`, () => {
		const gamesList = [
			{
				id: 1,
				rounds: [
					{ red: 4, green: 0, blue: 3 },
					{ red: 1, green: 2, blue: 6 },
					{ red: 0, green: 2, blue: 0 },
				],
			},
			{
				id: 2,
				rounds: [
					{ red: 0, green: 2, blue: 1 },
					{ red: 1, green: 3, blue: 4 },
					{ red: 0, green: 1, blue: 1 },
				],
			},
			{
				id: 3,
				rounds: [
					{ red: 20, green: 8, blue: 6 },
					{ red: 4, green: 13, blue: 5 },
					{ red: 1, green: 5, blue: 0 },
				],
			},
			{
				id: 4,
				rounds: [
					{ red: 3, green: 1, blue: 6 },
					{ red: 6, green: 3, blue: 0 },
					{ red: 14, green: 3, blue: 15 },
				],
			},
			{
				id: 5,
				rounds: [
					{ red: 5, green: 3, blue: 1 },
					{ red: 1, green: 2, blue: 2 },
				],
			},
		]
		const expected = getInfoFromGames(gamesList)
		assert.deepEqual(expected.validGames, [1, 2, 5])
		assert.equal(expected.sumOfIds, 8)
	})
})


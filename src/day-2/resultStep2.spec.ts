import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { resulStep2 } from './resultStep2'

void describe('resulStep2', () => {
	void it(`should return the sum of the power given a set of games`, () => {
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
					{ red: 6, green: 3, blue: 1 },
					{ red: 1, green: 2, blue: 2 },
				],
			},
		]

		assert.equal(resulStep2(gamesList), 2286)
	})
})

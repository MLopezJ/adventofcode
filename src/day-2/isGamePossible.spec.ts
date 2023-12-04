import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

type Game = {
	id: number
	rounds: Round[]
}

type Round = {
	red: number
	green: number
	blue: number
}

/**
 * Maximum number of cubes by color:
 *  Red = 12
 *  Green = 14
 *  Blue = 14
 */
const maxRed = 12
const maxGreen = 13
const maxBlue = 14

void describe('isGamePossible', () => {
	for (const [game, expected] of [
		[
			{
				id: 1,
				rounds: [
					{ red: 4, green: 0, blue: 3 },
					{ red: 1, green: 2, blue: 6 },
					{ red: 0, green: 2, blue: 0 },
				],
			},
			true,
		],
		[
			{
				id: 2,
				rounds: [
					{ red: 0, green: 2, blue: 1 },
					{ red: 1, green: 3, blue: 4 },
					{ red: 0, green: 1, blue: 1 },
				],
			},
			true,
		],
		[
			{
				id: 3,
				rounds: [
					{ red: 20, green: 8, blue: 6 },
					{ red: 4, green: 13, blue: 5 },
					{ red: 1, green: 5, blue: 0 },
				],
			},
			false,
		],
		[
			{
				id: 4,
				rounds: [
					{ red: 3, green: 1, blue: 6 },
					{ red: 6, green: 3, blue: 0 },
					{ red: 14, green: 3, blue: 15 },
				],
			},
			false,
		],
		[
			{
				id: 5,
				rounds: [
					{ red: 5, green: 3, blue: 1 },
					{ red: 1, green: 2, blue: 2 },
				],
			},
			true,
		],
	] as [Game, boolean][]) {
		void it(`should check than game ID ${game.id} is ${
			expected === false ? 'NOT possible' : 'possible'
		} to play`, () => {
			assert.equal(isGamePossible(game), expected)
		})
	}
})

const isGamePossible = (game: Game) => false

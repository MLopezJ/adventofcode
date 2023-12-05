import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { type Game } from './isGamePossible.js'
import { getFewestCubes, type Fewest } from './getFewestCubes.js'

void describe('getFewestCubes', () => {
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
			{
				id: 1,
				red: 4,
				green: 2,
				blue: 6,
			},
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
			{
				id: 2,
				red: 1,
				green: 3,
				blue: 4,
			},
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
			{
				id: 3,
				red: 20,
				green: 13,
				blue: 6,
			},
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
			{
				id: 4,
				red: 14,
				green: 3,
				blue: 15,
			},
		],
		[
			{
				id: 5,
				rounds: [
					{ red: 6, green: 3, blue: 1 },
					{ red: 1, green: 2, blue: 2 },
				],
			},
			{
				id: 5,
				red: 6,
				green: 3,
				blue: 2,
			},
		],
		[
			{
				id: 6,
				rounds: [
					{ red: 6, green: 0, blue: 1 },
					{ red: 1, green: 0, blue: 2 },
				],
			},
			{
				id:6,
				red: 6,
				green: 0,
				blue: 2,
			},
		],
	] as [Game, Fewest][]) {
		void it(`should return the fewest ammount of cubes per game in order of game ${game.id} be possible to be played`, () => {
			assert.deepEqual(getFewestCubes(game), expected)
		})
	}
})

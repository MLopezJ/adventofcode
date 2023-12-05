import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { type Fewest } from './getFewestCubes.js'
import { getPower } from './getPower.js'

void describe('getPower', () => {
	for (const [game, expected] of [
		[
			{
				id: 1,
				red: 4,
				green: 2,
				blue: 6,
			},
			48,
		],
		[
			{
				id: 2,
				red: 1,
				green: 3,
				blue: 4,
			},
			12,
		],
		[
			{
				id: 3,
				red: 20,
				green: 13,
				blue: 6,
			},
			1560,
		],
		[
			{
				id: 4,
				red: 14,
				green: 3,
				blue: 15,
			},
			630,
		],
		[
			{
				id: 5,
				red: 6,
				green: 3,
				blue: 2,
			},
			36,
		],
	] as [Fewest, number][]) {
		void it(`should check that power of game ${game.id} is ${expected}`, () => {
			assert.deepEqual(getPower(game), expected)
		})
	}
})

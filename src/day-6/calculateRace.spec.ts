import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { calculateRace, type Race } from './calculateRace.js'

void describe('calculateRace', () => {
	for (const [race, expected] of [
		[
			{
				time: 7,
				distance: 9,
			},
			4,
		],
        /*
		[
			{
				time: 15,
				distance: 40,
			},
			8,
		],
		[
			{
				time: 30,
				distance: 200,
			},
			9,
		],
        */
	] as [Race, number][]) {
		void it(`should calculate the number of ways possible (${expected}) to beat a record (${race.distance}) in a race that last ${race.time}`, () => {
			assert.equal(calculateRace(race), expected)
		})
	}
})
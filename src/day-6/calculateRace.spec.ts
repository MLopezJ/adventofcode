import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

void describe('calculateRace', () => {
	for (const [race, expected] of [
		[
			{
				time: 7,
				distance: 9,
			},
			4,
		],
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
	] as [Race, number][]) {
		void it(`should calculate the error margin for a race how last ${race.time} and it record is ${race.distance}`, () => {
			assert.equal(calculateRace(race), expected)
		})
	}
})

type Race = {
	time: number
	distance: number
}
const calculateRace = (race: Race) => {
	return 0
}

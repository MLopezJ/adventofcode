import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { getPoints } from './getPoints'

void describe('getPoints', () => {
	for (const [input, expected] of [
		[
			{
				id: 1,
				matches: [48, 83, 17, 86],
			},
			8,
		],
		[
			{
				id: 2,
				matches: [32 , 61],
			},
			2,
		],
		[
			{
				id: 3,
				matches: [1 , 21],
			},
			2,
		],
		[
			{
				id: 4,
				matches: [84],
			},
			1,
		],
	] as [
		{
			id: number
			matches: number[]
		},
		number,
	][]) {
		void it(`should sum points from winning numbers. Card ${input.id}`, () => {
			assert.equal(getPoints(input.matches), expected)
		})
	}
})

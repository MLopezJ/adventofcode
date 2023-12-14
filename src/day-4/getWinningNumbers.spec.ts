import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { getWinningNumbers } from './getWinningNumbers.js'
import type { Card } from './result.js'


void describe('getWinningNumbers', () => {
	for (const [input, expected] of [
		[
			{
				id: 1,
				card: {
					winningNumbers: [41, 48, 83, 86, 17],
					yourNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
				},
			},
			[48, 83, 17, 86],
		],

		[
			{
				id: 2,
				card: {
					winningNumbers: [13, 32, 20, 16, 61],
					yourNumbers: [61, 30, 68, 82, 17, 32, 24, 19],
				},
			},
			[32, 61],
		],

		[
			{
				id: 3,
				card: {
					winningNumbers: [1, 21, 53, 59, 44],
					yourNumbers: [69, 82, 63, 72, 16, 21, 14, 1],
				},
			},
			[1, 21],
		],

		[
			{
				id: 4,
				card: {
					winningNumbers: [41, 92, 73, 84, 69],
					yourNumbers: [59, 84, 76, 51, 58, 5, 54, 83],
				},
			},
			[84],
		],

		[
			{
				id: 5,
				card: {
					winningNumbers: [87, 83, 26, 28, 32],
					yourNumbers: [88, 30, 70, 12, 93, 22, 82, 36],
				},
			},
			undefined,
		],

		[
			{
				id: 6,
				card: {
					winningNumbers: [31, 18, 13, 56, 72],
					yourNumbers: [74, 77, 10, 23, 35, 67, 36, 11],
				},
			},
			undefined,
		],
	] as [
		{
			id: number
			card: Card
		},
		number[] | undefined,
	][]) {
		void it(`should return numbers from 'yourNumbers' that appear in 'winningNumbers'. Card number: ${input.id}`, () => {
			assert.deepEqual(getWinningNumbers(input.card), expected)
		})
	}
})

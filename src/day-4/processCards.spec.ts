import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { processCards } from './processCards'

void describe('processCards', () => {
	void it(`should iterate over cards and return the amount of matches and instaces per card`, () => {
		const input = {
			1: {
				numbers: {
					winningNumbers: [41, 48, 83, 86, 17],
					yourNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
				},
				matches: 0,
				copies: 0,
			},

			2: {
				numbers: {
					winningNumbers: [13, 32, 20, 16, 61],
					yourNumbers: [61, 30, 68, 82, 17, 32, 24, 19],
				},
				matches: 0,
				copies: 0,
			},

			3: {
				numbers: {
					winningNumbers: [1, 21, 53, 59, 44],
					yourNumbers: [69, 82, 63, 72, 16, 21, 14, 1],
				},
				matches: 0,
				copies: 0,
			},

			4: {
				numbers: {
					winningNumbers: [41, 92, 73, 84, 69],
					yourNumbers: [59, 84, 76, 51, 58, 5, 54, 83],
				},
				matches: 0,
				copies: 0,
			},

			5: {
				numbers: {
					winningNumbers: [87, 83, 26, 28, 32],
					yourNumbers: [88, 30, 70, 12, 93, 22, 82, 36],
				},

				matches: 0,
				copies: 0,
			},

			6: {
				numbers: {
					winningNumbers: [31, 18, 13, 56, 72],
					yourNumbers: [74, 77, 10, 23, 35, 67, 36, 11],
				},

				matches: 0,
				copies: 0,
			},
		}

		const expected = {
			'1': {
				matches: 4,
				copies: 0,
			},
			'2': {
				matches: 2,
				copies: 1,
			},
			'3': {
				matches: 2,
				copies: 3,
			},
			'4': {
				matches: 1,
				copies: 7,
			},
			'5': {
				matches: 0,
				copies: 13,
			},
			'6': {
				matches: 0,
				copies: 0,
			},
		}

		assert.deepEqual(processCards(input), expected)
	})
})
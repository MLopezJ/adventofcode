import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { getNumbers, type NumberInfo } from './getNumbers.js'

void describe('getNumbers', () => {
	for (const [token, expected] of [
		[
			['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
			[
				{ number: 467, init: 0, end: 2 },
				{ number: 114, init: 5, end: 7 },
			],
		],

		[['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'], []],

		[
			['6', '5', '1', '*', '.', '.', '-', '5', '0', '9'],
			[
				{ number: 651, init: 0, end: 2 },
				{ number: 509, init: 7, end: 9 },
			],
		],
	] as [string[], NumberInfo[]][]) {
		void it(`should return the numbers present in the token list`, () => {
			assert.deepEqual(getNumbers(token), expected)
		})
	}
})

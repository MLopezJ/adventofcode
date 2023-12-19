import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

void describe('calibrationPartII', () => {
	for (const [token, expected] of [
		['two1nine', 29],
		['eightwothree', 83],
		['abcone2threexyz', 13],
		['xtwone3four', 24],
		['4nineeightseven2', 42],
        ['nineeightseven', 97],
		['zoneight234', 14],
		['7pqrstsixteen', 76],
	] as [string, number][]) {
		void it(`should get calibration value (${expected}) from token '${token}'`, () => {
			assert.equal(calibrationPartII(token), expected)
		})
	}
})

/**
 * Find first and last number of input.
 * 
 * Number can be writen in numberr format (example: 5) or in string format (example: five)
 */
const calibrationPartII = (token: string): number => {
	return 0
}

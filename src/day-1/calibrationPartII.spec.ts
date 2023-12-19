import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { calibrationPartII } from './calibrationPartII.js'

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

    void it(`should not transform string 'ten' in number`, () => {
        assert.equal(calibrationPartII('ten234'), 24)
    })
})


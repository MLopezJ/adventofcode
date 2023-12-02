import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

void describe('getCalibration', () => {
	for (const [token, expected] of [
		['1abc2', 12],
        ['pqr3stu8vwx', 38],
        ['a1b2c3d4e5f', 15],
        ['treb7uchet', 77],
	] as [string, number][]) {
		void it(`should get calibration value (${expected}) from token ${token}`, () => {
			assert.equal(getCalibration(token), expected)
		})
	}
})

/**
 * WIP
 */
const getCalibration = (token: string) => token





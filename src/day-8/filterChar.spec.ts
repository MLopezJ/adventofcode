import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { filterChar } from './filterChar.js'

describe('filterCharr', () => {
	for (const [stringInput, char, expected] of [
		['AAA ', ' ', 'AAA'],
		[' (BBB', '(', ' BBB'],
		[' CCC)', ')', ' CCC'],
	] as [string, string, string][]) {
		it(`should filter '${char}' from ${stringInput}`, () => {
			assert.equal(filterChar(stringInput, char), expected)
		})
	}
})

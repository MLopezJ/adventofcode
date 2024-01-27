import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { leastCommonMultiple } from './leastCommonMultiple'

void describe('leastCommonMultiple', () => {
	for (const [array, expected] of [
        [[1, 2, 3], 6],
        [[6,7,21], 42],
        [[12, 15,75], 300]
    ] as [number[], number][]) {
		void it(`should return ${expected} (Least Common Multiple) from ${array}`, () => {
			assert.equal(leastCommonMultiple(array), expected)
		})
	}
})

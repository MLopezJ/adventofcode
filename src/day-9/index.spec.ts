import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { predict } from '.'

void describe('Predict', () => {
	it(`should predict next value from sequention`, () => {
		const input = [0, 3, 6, 9, 12, 15]
		const expectedResult = 18
		assert.equal(predict(input), expectedResult)
	})
})

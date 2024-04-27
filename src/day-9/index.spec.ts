import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { differenceAtEachStep, predict } from '.'

void describe('Predict', () => {
	it(`should predict next value from sequention`, () => {
		const input = [0, 3, 6, 9, 12, 15]
		const expectedResult = 18
		assert.equal(predict(input), expectedResult)
	})
})

void describe(`difference at each step`, () => {
	it(`should make a new sequence from the difference at each step of input data`, () => {
		const input = [0, 3, 6, 9, 12, 15]
		const expectedResult = [3, 3, 3, 3, 3]
		const result = differenceAtEachStep(input)
		assert.equal(result, expectedResult)
		assert.equal(result.length, input.length - 1)
	})
})

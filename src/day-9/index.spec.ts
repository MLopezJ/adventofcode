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
	for (const [input, expectedOutput] of [
		[
			[0, 3, 6, 9, 12, 15],
			[3, 3, 3, 3, 3],
		],

		[
			[3, 3, 3, 3, 3],
			[0, 0, 0, 0],
		],
	] as [number[], number[]][]) {
		it(`should make a new sequence (${expectedOutput}) from the difference at each step of input data (${input})`, () => {
			const result = differenceAtEachStep(input)
			assert.deepEqual(result, expectedOutput)
			// Note that this sequence has one fewer value than the input sequence because at each step it considers two numbers from the input.
			assert.equal(result.length, input.length - 1)
		})
	}
})

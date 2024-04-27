import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { differenceAtEachStep, numberPredicted, sum } from '.'

void describe('numberPredicted', () => {
	for (const [input, expectedPrediction] of [
		[[0, 3, 6, 9, 12, 15], 18],
		[[1, 3, 6, 10, 15, 21], 28],
		[[10, 13, 16, 21, 30, 45], 68],
	] as [number[], number][]) {
		it(`should return the number predictd (${expectedPrediction}) by method "predict" with input (${input})`, () =>
			assert.equal(numberPredicted(input), expectedPrediction))
	}
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

void describe(`sum predicted numbers`, () => {
	it(`should predict next number per sequence, return the value and sum all the predicted numbers`, () => {
		const input = [
			[0, 3, 6, 9, 12, 15],
			[1, 3, 6, 10, 15, 21],
			[10, 13, 16, 21, 30, 45],
		]
		const expected = 114
		assert.equal(sum(input), expected)
	})
})

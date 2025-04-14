import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { differenceAtEachStep, fromTextToList, numberPredicted, sum, previousValue } from '.'

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

void describe('extrapolateBackwards', () => {
	for (const [a, b, c] of [
		[0, 2, 2],
		[2, 0, -2],
		[-2, 3, 5],
		[5, 10, 5]
	] as [number, number, number][]) {
		it(`should discover value ${c}, that is the value needed when performing X - ${b} = ${a}`, () =>
			assert.equal(previousValue(a, b), c))
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

		[
			[8, 6, 4, 2, 0, -2, -4, -6, -8, -10],
			[-2, -2, -2, -2, -2, -2, -2, -2, -2],
		],

		[
			[14, 8, -3, -19, -40, -66, -97, -133],
			[-6, -11, -16, -21, -26, -31, -36],
		],

		[
			[-6, -11, -16, -21, -26, -31, -36],
			[-5, -5, -5, -5, -5, -5],
		],

		[
			[-5, -5, -5, -5, -5, -5],
			[0, 0, 0, 0, 0],
		],

		[
			[0, 0, 0, 1],
			[0, 0, 1],
		],

		[
			[10, 13, 16, 21, 30, 45, 68],
			[3,3, 5, 9, 15, 23],
		],

		[
			[3,3, 5, 9, 15, 23],
			[0, 2, 4, 6, 8],
		],

		[
			[0, 2, 4, 6, 8],
			[2, 2, 2, 2],
		],

		[
			[2, 2, 2, 2],
			[0, 0, 0],
		],

		[
			[9, 10, 10, 9, 7, 4, 4, 1, 1, -66, -35, 0, -45, -81, -124, -81, -95, -105],
			[1, 0, -1, -2, -3, 0,-3, 0, -67, 31, 35, -45, -36, -43, 43, -14, -10],
		]

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

void describe(`fromTextToList`, () => {
	it(`should transform input from a string to an array of numbers`, () => {
		const input = '14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48'
		const expectedOutput = [
			14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48,
		]
		assert.deepStrictEqual(fromTextToList(input), expectedOutput)
	})
})

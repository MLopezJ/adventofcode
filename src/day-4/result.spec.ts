import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { getPuzzle, partII, result, transformToGameType } from './result.js'

void describe('result', () => {
	void it(`should sum point from winning numbers given the cards`, async () => {
		/**
		Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
		Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
		Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
		Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
		Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
		Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
		 */
		const logs = await getPuzzle('puzzle-test.txt')
		assert.equal(result(logs), 13)
	})
})

void describe('transformToGameType', () => {
	for (const [input, expected] of [
		[
			{
				id: 1,
				text: 'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
			},
			{
				winningNumbers: [41, 48, 83, 86, 17],
				yourNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
			},
		],
		[
			{
				id: 200,
				text: 'Card 200: 86 85 91  2 27 65 45 73 60 69 | 66 26 28  7 98 80 14 52  6 35 57 46 39  4 30 55 94 75 82 83 96 13 74  9 58',
			},
			{
				winningNumbers: [86, 85, 91, 2, 27, 65, 45, 73, 60, 69],
				yourNumbers: [
					66, 26, 28, 7, 98, 80, 14, 52, 6, 35, 57, 46, 39, 4, 30, 55, 94, 75,
					82, 83, 96, 13, 74, 9, 58,
				],
			},
		],
	] as [{ id: number; text: string }, any][]) {
		void it(`should transform card ${input.id} in game format type`, () => {
			assert.deepEqual(transformToGameType(input.text), expected)
		})
	}
})

void describe('partII', () => {
	void it(`should return the amount of scratchcards (copies and original)`, async () => {
		/**
		Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
		Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
		Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
		Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
		Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
		Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
		 */
		//const logs = await getPuzzle('puzzle-test.txt')

		// TODO: transform input in expected type
		const logs = {
			1: {
				numbers: {
					winningNumbers: [41, 48, 83, 86, 17],
					yourNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
				},
				matches: 0,
				copies: 0,
			},

			2: {
				numbers: {
					winningNumbers: [13, 32, 20, 16, 61],
					yourNumbers: [61, 30, 68, 82, 17, 32, 24, 19],
				},
				matches: 0,
				copies: 0,
			},

			3: {
				numbers: {
					winningNumbers: [1, 21, 53, 59, 44],
					yourNumbers: [69, 82, 63, 72, 16, 21, 14, 1],
				},
				matches: 0,
				copies: 0,
			},

			4: {
				numbers: {
					winningNumbers: [41, 92, 73, 84, 69],
					yourNumbers: [59, 84, 76, 51, 58, 5, 54, 83],
				},
				matches: 0,
				copies: 0,
			},

			5: {
				numbers: {
					winningNumbers: [87, 83, 26, 28, 32],
					yourNumbers: [88, 30, 70, 12, 93, 22, 82, 36],
				},

				matches: 0,
				copies: 0,
			},

			6: {
				numbers: {
					winningNumbers: [31, 18, 13, 56, 72],
					yourNumbers: [74, 77, 10, 23, 35, 67, 36, 11],
				},

				matches: 0,
				copies: 0,
			},
		}
		assert.equal(partII(logs), 30)
	})
})

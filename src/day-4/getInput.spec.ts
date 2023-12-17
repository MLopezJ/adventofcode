import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { transformToGameType, transformToGameTypePartII } from './getInput.js';


void describe('transformToGameType (part I)', () => {
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

void describe('transformToGameType (part II)', () => {
	for (const [input, expected] of [
		[
			{
				id: 1,
				text: 'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
			},
			{
				1: {
					numbers: {
						winningNumbers: [41, 48, 83, 86, 17],
						yourNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
					},
					matches: 0,
					copies: 0,
				},
			},
		],
		[
			{
				id: 200,
				text: 'Card 200: 86 85 91  2 27 65 45 73 60 69 | 66 26 28  7 98 80 14 52  6 35 57 46 39  4 30 55 94 75 82 83 96 13 74  9 58',
			},

			{
				200: {
					numbers: {
						winningNumbers: [86, 85, 91, 2, 27, 65, 45, 73, 60, 69],
						yourNumbers: [
							66, 26, 28, 7, 98, 80, 14, 52, 6, 35, 57, 46, 39, 4, 30, 55, 94,
							75, 82, 83, 96, 13, 74, 9, 58,
						],
					},
					matches: 0,
					copies: 0,
				},
			},
		],
	] as [{ id: number; text: string }, any][]) {
		void it(`should transform card ${input.id} in game format type`, () => {
			assert.deepEqual(transformToGameTypePartII(input.text), expected)
		})
	}
})
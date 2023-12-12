import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
	getAdjacents,
	getNumbersAdjacentToAsterisk,
} from './getNumbersAdjacentToAsterisk.js'
import type { NumberInfo } from './getTokens.js'

void describe('getNumbersAdjacentToAsterisk', () => {
	void it(`should return a list with numbers adjecents to any symbol`, () => {
		const schematic = [
			'467..114..',
			'...*......',
			'..35..633.',
			'......#...',
			'617*......',
			'.....+.58.',
			'..592.....',
			'......755.',
			'...$.*....',
			'.664.598..',
		]

		assert.deepEqual(getNumbersAdjacentToAsterisk(schematic), [
			{
				numbers: [
					{ init: 0, end: 2, number: 467, row: 0 },
					{ init: 2, end: 3, number: 35, row: 2 },
				],
				asterisk: {
					column: 3,
					row: 1,
				},
			},

			{
				numbers: [
					{ init: 6, end: 8, number: 755, row: 7 },
					{ init: 5, end: 7, number: 598, row: 9 },
				],
				asterisk: {
					column: 5,
					row: 8,
				},
			},
		])
	})
})

void describe('getAdjacents', () => {
	for (const [input, expected] of [
		[
			{
				asteriskPosition: 3,
				asteriskRow: 1,
				numbersInfo: [
					[
						{ init: 0, end: 2, number: 467 },
						{ init: 5, end: 7, number: 114 },
					],
					[],
					[
						{ init: 2, end: 3, number: 35 },
						{ init: 6, end: 8, number: 633 },
					],
					[],
					[{ init: 0, end: 2, number: 617 }],
					[{ init: 7, end: 8, number: 58 }],
					[{ init: 2, end: 4, number: 592 }],
					[{ init: 6, end: 8, number: 755 }],
					[],
					[
						{ init: 1, end: 3, number: 664 },
						{ init: 5, end: 7, number: 598 },
					],
				],
			},
			[
				{ init: 0, end: 2, number: 467, row: 0 },
				{ init: 2, end: 3, number: 35, row: 2 },
			],
		],
	] as [
		{
			asteriskPosition: number
			asteriskRow: number
			numbersInfo: NumberInfo[][]
		},
		{ init: number; end: number; number: number; row: number }[],
	][]) {
		void it(`should return adjacents number to asterisk in position row: ${input.asteriskRow} column: ${input.asteriskPosition} `, () => {
			assert.deepEqual(getAdjacents(input), expected)
		})
	}
})

import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
	getAdjacents,
	getNumbersAdjacentToAsterisk,
} from './getNumbersAdjacentToAsterisk.js'
import type { NumberInfo } from './getTokens.js'

void describe('getNumbersAdjacentToAsterisk', () => {
	
	void it(`should return a list with numbers adjecents to any '*' symbol`, () => {
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
				numbers: [{ init: 0, end: 2, number: 617, row: 4 }],
				asterisk: { column: 3, row: 4 },
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

	void it(`should conver case when input has not asterisks symbols`, () => {
		const schematic = [
			'467..114.@',
			'...!......',
			'..35..633.',
			'.+....#...',
			'617^.....=',
		]

		assert.deepEqual(getNumbersAdjacentToAsterisk(schematic), [])
	})

	void it(`should return a list with numbers adjecents to '*' symbol when schematic is same as real example`, () => {
		const schematic = [
			'............274*...........929.................871........686.542..%........*......*.......................882....756.............*859..*...',
			'................516.........*.....................*..............*...289...10.....890..985...258...963...............*.................526..',
			'.............................610...............857........210..818......*.......@.........#..=......*.....968.........42..........732.......',
		]

		const result = getNumbersAdjacentToAsterisk(schematic)
		assert.deepEqual(result.length, 11)
	})

	void it(`should conver case when asterisk is adjacent to more than 2 numbers`, () => {
		const schematic = [
			//
			'2.2......12.',
			'.*.........*',
			'1.1..503+.56',
		]

		assert.deepEqual(getNumbersAdjacentToAsterisk(schematic), [
			{
				numbers: [
					{ init: 0, end: 0, number: 2, row: 0 },
					{ init: 2, end: 2, number: 2, row: 0 },
					{ init: 0, end: 0, number: 1, row: 2 },
					{ init: 2, end: 2, number: 1, row: 2 },
				],
				asterisk: {
					column: 1,
					row: 1,
				},
			},

			{
				numbers: [
					{ init: 9, end: 10, number: 12, row: 0 },
					{ init: 10, end: 11, number: 56, row: 2 },
				],
				asterisk: { column: 11, row: 1 },
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
				rowLenght: 10,
			},
			[
				{ init: 0, end: 2, number: 467, row: 0 },
				{ init: 2, end: 3, number: 35, row: 2 },
			],
		],

		/**
		 	2.2......12.
			.*.........*
			1.1..503+.56
		 */
		[
			{
				asteriskPosition: 1,
				asteriskRow: 1,
				numbersInfo: [
					[
						{ init: 0, end: 0, number: 2 },
						{ init: 2, end: 2, number: 2 },
						{ init: 9, end: 10, number: 12 },
					],
					[],
					[
						{ init: 0, end: 0, number: 1 },
						{ init: 2, end: 2, number: 1 },
						{ init: 5, end: 7, number: 503 },
						{ init: 10, end: 11, number: 56 },
					],
				],
				rowLenght: 12,
			},
			[
				{ init: 0, end: 0, number: 2, row: 0 },
				{ init: 2, end: 2, number: 2, row: 0 },
				{ init: 0, end: 0, number: 1, row: 2 },
				{ init: 2, end: 2, number: 1, row: 2 },
			],
		],
	] as [
		{
			asteriskPosition: number
			asteriskRow: number
			numbersInfo: NumberInfo[][]
			rowLenght: number
		},
		{ init: number; end: number; number: number; row: number }[],
	][]) {
		void it(`should return adjacents number to asterisk in position row: ${input.asteriskRow} column: ${input.asteriskPosition} `, () => {
			assert.deepEqual(getAdjacents(input), expected)
		})
	}
})

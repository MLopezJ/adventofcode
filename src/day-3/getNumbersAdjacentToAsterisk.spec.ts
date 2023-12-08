import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { getNumbersAdjacentToAsterisk } from './getNumbersAdjacentToAsterisk.js'

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

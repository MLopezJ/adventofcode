import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { type NumberInfo } from './getNumbers.js'
import { hasNumberASymbolAdjacent } from './hasNumberASymbolAdjacent.js'

void describe('hasNumberASymbolAdjacent', () => {
	for (const [input, expected] of [
		// left, same row
		[
			{
				numberInfo: { number: 67, init: 1, end: 2 },
				schematic: [
					['*', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
					['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
				],
				numberRow: 0,
			},
			true,
		],

		// rigth, same row
		[
			{
				numberInfo: { number: 1146, init: 5, end: 8 },
				schematic: [
					['.', '6', '7', '.', '.', '1', '1', '4', '6', '%'],
					['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
				],
				numberRow: 0,
			},
			true,
		],

		// upper row
		[
			{
				numberInfo: { number: 67, init: 1, end: 2 },
				schematic: [
					['.', '*', '.', '.', '.', '.', '.', '.', '.', '.'],
					['.', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
				],
				numberRow: 1,
			},
			true,
		],

		// upper row diagonal left
		[
			{
				numberInfo: { number: 67, init: 1, end: 2 },
				schematic: [
					['(', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
					['.', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
				],
				numberRow: 1,
			},
			true,
		],

		// upper row diagonal right
		[
			{
				numberInfo: { number: 67, init: 1, end: 2 },
				schematic: [
					['.', '.', '.', '-', '.', '.', '.', '.', '.', '.'],
					['.', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
				],
				numberRow: 1,
			},
			true,
		],

		// buttom row
		[
			{
				numberInfo: { number: 67, init: 1, end: 2 },
				schematic: [
					['.', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
					['.', '.', '^', '.', '.', '.', '.', '.', '.', '.'],
				],
				numberRow: 0,
			},
			true,
		],

		// buttom row diagonal left
		[
			{
				numberInfo: { number: 67, init: 1, end: 2 },
				schematic: [
					['.', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
					['@', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
				],
				numberRow: 0,
			},
			true,
		],

		// buttom row diagonal rigth
		[
			{
				numberInfo: { number: 1146, init: 5, end: 8 },
				schematic: [
					['.', '6', '7', '.', '.', '1', '1', '4', '6', '.'],
					['.', '.', '.', '.', '.', '.', '.', '.', '.', '?'],
				],
				numberRow: 0,
			},
			true,
		],
	] as [
		{ numberInfo: NumberInfo; schematic: string[][]; numberRow: number },
		boolean,
	][]) {
		void it(`should check if there is an adjacent symbol to the number`, () => {
			assert.equal(
				hasNumberASymbolAdjacent(
					input.numberInfo,
					input.schematic,
					input.numberRow,
				),
				expected,
			)
		})
	}
})

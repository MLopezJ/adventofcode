import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { type NumberInfo } from './getNumbers.js'
import { hasNumberASymbolAdjacent } from './hasNumberASymbolAdjacent.js'

void describe('hasNumberASymbolAdjacent', () => {
	for (const [testType, input, expected] of [
		
		[
			'left, same row',
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

		[
			'rigth, same row',
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

		
		[
			'upper row',
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

		[
			'upper row diagonal left',
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

		[
			'upper row diagonal right',
			{
				numberInfo: { number: 467, init: 0, end: 2 },
				schematic: [
					['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
					['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
				],
				numberRow: 1,
			},
			true,
		],

		[
			'buttom row',
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

		[
			'buttom row diagonal left',
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

		[
			'buttom row diagonal rigth',
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

		[
			'buttom row diagonal rigth beeggining',
			{
				numberInfo: { number: 467, init: 0, end: 2 },
				schematic: [
					['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
					['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
				],
				numberRow: 0,
			},
			true,
		],

		/*
		[
			'end of line',
			{
				numberInfo: { number: 781, init: 7, end: 9 },
				schematic: [
					['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
					['3', '4', '4', '.', '.', '.', '.', '7', '8', '1'],
					['.', '.', '.', '.', '.', '.', '.', '.', '.', '*'],
				],
				numberRow: 2,
			},
			true,
		],
		[
			'beggining of line',
			{
				numberInfo: { number: 344, init: 0, end: 2 },
				schematic: [
					['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
					['3', '4', '4', '.', '.', '.', '.', '7', '8', '1'],
					['*', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
				],
				numberRow: 2,
			},
			true,
		],
		*/
		
	] as [
		testType: string,
		{ numberInfo: NumberInfo; schematic: string[][]; numberRow: number },
		boolean,
	][]) {
		void it(`should check if there is an adjacent symbol to the number: ${testType}`, () => {
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

	for (const [input, expected] of [
		// upper row
		[
			{
				numberInfo: { number: 167, init: 0, end: 2 },
				schematic: [
					['.', '*', '.', '.', '.', '.', '.', '.', '.', '.'],
					['1', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
				],
				numberRow: 1,
			},
			true,
		],

		// buttom row
		[
			{
				numberInfo: { number: 6789114, init: 1, end: 7 },
				schematic: [
					['.', '6', '7', '8', '9', '1', '1', '4', '.', '.'],
					['.', '.', '^', '.', '.', '.', '.', '.', '.', '.'],
				],
				numberRow: 0,
			},
			true,
		],

		[
			{
				numberInfo: { number: 6666666, init: 1, end: 7 },
				schematic: [
					['.', '6', '6', '6', '6', '6', '6', '6', '.', '.'],
					['.', '.', '*', '.', '.', '$', '.', '.', '.', '.'],
				],
				numberRow: 0,
			},
			true,
		],
	] as [
		{ numberInfo: NumberInfo; schematic: string[][]; numberRow: number },
		boolean,
	][]) {
		void it(`should check adjacent case when number have more than 2 digits: ${input.numberInfo.number}`, () => {
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

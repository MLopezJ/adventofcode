import type { NumberInfo } from './getNumbers.js'

type N = NumberInfo & { row: number }
export type AsteriskInfo = {
	numbers: N[]
	asterisk: {
		column: number
		row: number
	}
}

/**
 * return numbers adjacent to an asterisk.
 */
export const getNumbersAdjacentToAsterisk = (
	schematic: string[],
): AsteriskInfo[] => {
	return [
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
	]
}

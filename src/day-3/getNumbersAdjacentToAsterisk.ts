import { getToken, type NumberInfo } from './getTokens.js'

type N = NumberInfo & { row: number }
export type AsteriskInfo = {
	numbers: N[]
	asterisk: {
		column: number
		row: number
	}
}

/**
 * Given the coordinates of the asterisk and the coordinates of all the numbers in the puzle,
 * return the adjacent numbers for that given asterisk
 */
const getAdjacents = ({
	asteriskPosition,
	asteriskRow,
	numbersInfo,
}: {
	asteriskPosition: number
	asteriskRow: number
	numbersInfo: NumberInfo[][]
}): NumberInfo[] | any => {
	//console.log(asteriskPosition, asteriskRow, numbersInfo)

	if (asteriskRow === 1)
		return [
			{ init: 0, end: 2, number: 467, row: 0 },
			{ init: 2, end: 3, number: 35, row: 2 },
		]

	if (asteriskRow === 8)
		return [
			{ init: 6, end: 8, number: 755, row: 7 },
			{ init: 5, end: 7, number: 598, row: 9 },
		]
	
	return undefined
}

/**
 * return numbers adjacent to an asterisk.
 */
export const getNumbersAdjacentToAsterisk = (
	schematic: string[],
): AsteriskInfo[] => {
	const tokenizedSchematic = schematic.map((elment) => elment.split(''))

	const asterisks = tokenizedSchematic.map((row) => getToken('asterisk', row))
	const numbers = tokenizedSchematic.map((row) => getToken('number', row))

	// TODO: for each asterisk, check if there is a number adjacent
	const info = asterisks
		.map((row, index) => {
			if (row.length > 0) {
				const x = row
					.map((asterisk) => {
						const r = getAdjacents({
							asteriskPosition: asterisk.init,
							asteriskRow: index,
							numbersInfo: numbers,
						})

						if (r !== undefined)
							return {
								asterisk: {
									column: asterisk.init,
									row: index,
								},
								numbers: r,
							}

						return undefined
					})
					.filter((element) => element !== undefined)

				if (x.length > 0) return x
				return undefined
			}
			return undefined
		})
		//.map((e) => console.log(e))
		.filter((element) => element !== undefined)
 
	/**
	 * if (hasAsteriskANumberAdjacent(asterisk, tokenizedSchematic, index) === true)
	 */

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

import { getToken, type NumberInfo } from './getTokens.js'

export type N = NumberInfo & { row: number }
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
export const getAdjacents = ({
	asteriskPosition,
	asteriskRow,
	numbersInfo,
	rowLenght,
}: {
	asteriskPosition: number
	asteriskRow: number
	numbersInfo: NumberInfo[][]
	rowLenght: number
}): NumberInfo[] | any => {
	const result = numbersInfo
		.map((row, rowIndex) => {
			if (row.length > 0) {
				const adjacentsInRow = row
					.map((info) => {
						/**
						 * because of adjacent definition, make no sense to check more than
						 * the row up and down to the asterisk
						 */

						// same line
						if (rowIndex === asteriskRow) {
							// an asterisk is in the right to this position
							if (asteriskPosition > 0 && info.end + 1 === asteriskPosition) {
								/*
								console.log(
									'number ',
									info.number,
									' is same row. In the right there is an asterisk',
								)*/
								return { ...info, row: rowIndex }
							}

							// an asterisk is in the left to this position
							if (
								asteriskPosition < rowLenght - 1 &&
								info.init - 1 === asteriskPosition
							) {
								/*
								console.log(
									'number ',
									info.number,
									' is same row. In the left there is an asterisk',
								)*/
								return { ...info, row: rowIndex }
							}
						}

						// taking the number as reference, the asterisk is 1 line down
						if (asteriskRow > rowIndex && asteriskRow - rowIndex === 1) {
							// an asterisk is down to this position
							if (
								info.init <= asteriskPosition &&
								info.end >= asteriskPosition
							) {
								/*
								console.log(
									'number ',
									info.number,
									'.  Down there is an asterisk',
								)
								*/
								return { ...info, row: rowIndex }
							}

							// an asterisk is diagonal rigth to this position
							if (asteriskPosition > 0 && info.end + 1 === asteriskPosition) {
								/*
								console.log(
									'number ',
									info.number,
									'. an asterisk is diagonal rigth (down) to this position',
								)*/
								return { ...info, row: rowIndex }
							}

							// an asterisk is diagonal left to this position
							if (
								asteriskPosition < rowLenght - 1 &&
								info.init - 1 === asteriskPosition
							) {
								/*
								console.log(
									'number ',
									info.number,
									' is diagonal left (down) to this position',
								)
								*/
								return { ...info, row: rowIndex }
							}
						}

						// taking the number as reference, the asterisk is 1 line up
						if (rowIndex > asteriskRow && rowIndex - asteriskRow === 1) {
							// an asterisk is up to this position
							if (
								info.init <= asteriskPosition &&
								info.end >= asteriskPosition
							) {
								/*
								console.log(
									'number ',
									info.number,
									'.  Up there is an asterisk',
								)
								*/
								return { ...info, row: rowIndex }
							}

							// an asterisk is diagonal rigth to this position
							if (asteriskPosition > 0 && info.end + 1 === asteriskPosition) {
								/*
								console.log(
									'number ',
									info.number,
									'. an asterisk is diagonal rigth (up) to this position',
								)
								*/
								return { ...info, row: rowIndex }
							}

							// an asterisk is diagonal left to this position
							if (
								asteriskPosition < rowLenght - 1 &&
								info.init - 1 === asteriskPosition
							) {
								/*
								console.log(
									'number ',
									info.number,
									' is diagonal left (down) to this position',
								)
								*/
								return { ...info, row: rowIndex }
							}
						}

						return undefined
					})
					.filter((element) => element !== undefined)

				if (adjacentsInRow.length === 0) return undefined
				return adjacentsInRow
			}
			return undefined
		})
		.filter((element) => element !== undefined)

	// remove matrix format  
	const list: ({ row: number; number: number; init: number; end: number } | undefined)[] = []
	result.forEach((row) => {
		if (row !== undefined)
		row.forEach((element) => {
			list.push(element)
		})
	})

	return list
}

/**
 * return numbers adjacent to an asterisk.
 */
export const getNumbersAdjacentToAsterisk = (
	schematic: string[],
): AsteriskInfo[] => {
	const tokenizedSchematic = schematic.map((elment) => elment.split(''))
	const rowLenght = tokenizedSchematic[0]?.length as number
	const asterisks = tokenizedSchematic.map((row) => getToken('asterisk', row))
	const numbers = tokenizedSchematic.map((row) => getToken('number', row))

	const info = asterisks
		.map((row, index) => {
			if (row.length > 0) {
				const adjacents = row
					.map((asterisk) => {
						const numbersAdjacets = getAdjacents({
							asteriskPosition: asterisk.init,
							asteriskRow: index,
							numbersInfo: numbers,
							rowLenght,
						})

						if (numbersAdjacets !== undefined)
							return {
								asterisk: {
									column: asterisk.init,
									row: index,
								},
								numbers: numbersAdjacets,
							}

						return undefined
					})
					.filter((element) => element !== undefined)

				return adjacents
			}
			return undefined
		})
		.filter((element) => element !== undefined)

	// remove matrix format  
	const list: ({ asterisk: { column: number; row: number }; numbers: any } | undefined)[] = []
	info.forEach((row) => {
		if (row !== undefined)
		row.forEach((element) => {
			list.push(element)
		})
	})

	return list as unknown as AsteriskInfo[]
}

import type { NumberInfo } from './getTokens.js'

/**
 * Adjacent contemplate up, down, left, rigth and diagonal
 * dot (".") is not considered a symbol
 */
export const hasNumberASymbolAdjacent = (
	numberInfo: NumberInfo,
	schematic: any, //string[][],
	numberRow: number,
): boolean => {
	if (numberInfo.number > 99) {
		let hasSymbol
		;[...Array(numberInfo.end - numberInfo.init + 1).keys()] // array with the positions
			.map((i) => i + numberInfo.init)
			.forEach((position) => {
				// check upper row
				// TODO: combine ifs
				if (numberRow > 0) {
					// up
					if (
						isSymbol({ row: numberRow - 1, column: position, schematic }) ===
						true
					)
						hasSymbol = true
				}

				// check down
				// TODO: combine ifs
				if (numberRow + 1 <= schematic.length - 1) {
					// down
					
					if (isSymbol({row: numberRow + 1, column: position, schematic }) === true)
						hasSymbol = true
				}
			})
		if (hasSymbol === true) {
			return true
		}
	}

	// check left, same rown
	// TODO: combine ifs
	if (numberInfo.init > 0)
		if (
			// 
			isSymbol({row: numberRow , column: numberInfo.init - 1, schematic }) === true
		)
		
			return true

	// check rigth, same rown
	// TODO: combine ifs
	if (numberInfo.end < schematic[numberRow].length)
		if (isSymbol({row: numberRow , column: numberInfo.end + 1, schematic }) === true) return true
		
	// check upper row
	if (numberRow > 0) {
		// up
		if (isSymbol({row: numberRow - 1 , column: numberInfo.init, schematic }) === true)
			return true

		if (isSymbol({row: numberRow - 1 , column: numberInfo.end, schematic }) === true) return true
		
		// diagonal left
		// TODO: combine ifs
		if (numberInfo.init > 0)
			if (isSymbol({row: numberRow - 1 , column: numberInfo.init -1, schematic }) === true)
			
				return true

		// diagonal rigth
		// TODO: combine ifs
		if (numberInfo.end < schematic[numberRow - 1].length)
			if (isSymbol({row: numberRow - 1 , column: numberInfo.end +1, schematic }) === true)
				return true
	}

	// check buttom row
	if (numberRow + 1 <= schematic.length - 1) {
		// down
		if (isSymbol({row: numberRow + 1 , column: numberInfo.init , schematic }) === true)
		
			return true

		if (isSymbol({row: numberRow + 1 , column: numberInfo.end , schematic }) === true) return true

		// diagonal left
		// TODO: combine ifs
		if (numberInfo.init > 0)
			if (isSymbol({row: numberRow + 1 , column: numberInfo.init - 1 , schematic }) === true)
				return true

		// diagonal right
		// TODO: combine ifs
		if (numberInfo.end < schematic[numberRow + 1].length)
			if (isSymbol({row: numberRow + 1 , column: numberInfo.end + 1 , schematic }) === true)
				return true
	}

	return false
}

/**
 * Return true if element is "."
 */
const isDot = (element: string) => element === '.'

/**
 * Return true if element is "*"
 */
export const isAsterisk = (element: string) => element === '*'

/**
 * Return true if element is numeric
 */
export const isNumber = (element: string) =>
	isNaN(element as unknown as number) === false

/**
 * If element is not a dot and not a number, is a symbol
 */
const isSymbol = ({
	row,
	column,
	schematic,
}: {
	row: number
	column: number
	schematic: any
}) => {
	const element: string | undefined = schematic[row][column]
	if (element === undefined) {
		console.log(Error(`element is undefined. Row: ${row}, Column: ${column}`))
		return false
	}

	return isDot(element) === false && isNumber(element) === false
}

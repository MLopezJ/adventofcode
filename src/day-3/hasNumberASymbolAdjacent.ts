import type { NumberInfo } from './getNumbers.ts'

/**
 * Adjacent contemplate up, down, left, rigth and diagonal
 * dot (".") is not considered a symbol
 */
export const hasNumberASymbolAdjacent = (
	numberInfo: NumberInfo,
	schematic: any, //string[][],
	numberRow: number,
): boolean => {
	/**
	 * ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
	 * ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
	 */

	// console.log((schematic[numberRow] as string[])[numberInfo.init])

	// check left, same rown
	if (numberInfo.init > 0)
		if (
			isSymbol((schematic[numberRow] as string[])[numberInfo.init - 1]) === true
		)
			return true

	// check rigth, same rown
	if (numberInfo.end < schematic[numberRow].length)
		if (isSymbol(schematic[numberRow][numberInfo.end + 1]) === true) return true

	// check upper row
	if (numberRow > 0) {
		// up
		if (isSymbol(schematic[numberRow - 1][numberInfo.init]) === true)
			return true

		if (isSymbol(schematic[numberRow - 1][numberInfo.end]) === true) return true

		// diagonal left
		if (numberInfo.init > 0)
			if (isSymbol(schematic[numberRow - 1][numberInfo.init - 1]) === true)
				return true
	}

	// check buttom row
	if (numberRow + 1 <= schematic.length - 1) {
		// down
		if (isSymbol(schematic[numberRow + 1][numberInfo.init]) === true)
			return true

		if (isSymbol(schematic[numberRow + 1][numberInfo.end]) === true) return true

		// diagonal left
		if (numberInfo.init > 0)
			if (isSymbol(schematic[numberRow + 1][numberInfo.init - 1]) === true)
				return true
	}

	return false
}

/**
 * Return true if element is "."
 */
const isDot = (element: string) => element === '.'

/**
 * Return true if element is numeric
 */
const isNumber = (element: string) =>
	isNaN(element as unknown as number) === false

/**
 * If element is not a dot and not a number, is a symbol
 */
const isSymbol = (element: string | undefined) => {
	if (element === undefined) {
		console.log(Error('element is undefined'))
		return false
	}

	return isDot(element) === false && isNumber(element) === false
}

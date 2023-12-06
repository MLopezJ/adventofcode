import { getNumbers, type NumberInfo } from './getNumbers.js'

/**
 * Adjacent contemplate up, down, left, rigth and diagonal
 * dot (".") is not a symbol
 */
export const getNumbersAdjacentToSymbol = (schematic: string[]): number[] => {
	const tokenizedSchematic = schematic.map((elment) => elment.split(''))
	console.log(tokenizedSchematic)

	tokenizedSchematic.forEach((token, index) => {
		// get number
		const numbersInLine = getNumbers(token)

		// get adjacent
		numbersInLine.filter((number) =>
			hasNumberASymbolAdjacent(number, tokenizedSchematic, index),
		)
	})
	return [0]
}

/**
 * Adjacent contemplate up, down, left, rigth and diagonal
 * dot (".") is not considered a symbol
 */
const hasNumberASymbolAdjacent = (
	numberInfo: NumberInfo,
	schematic: string[][],
	numberRow: number,
): boolean => {
	return true
}

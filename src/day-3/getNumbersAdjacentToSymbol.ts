import { getToken } from './getTokens.js'
import { hasNumberASymbolAdjacent } from './hasNumberASymbolAdjacent.js'

/**
 * Adjacent contemplate up, down, left, rigth and diagonal
 * dot (".") is not a symbol
 */
export const getNumbersAdjacentToSymbol = (schematic: string[]): number[] => {
	const tokenizedSchematic = schematic.map((elment) => elment.split(''))

	const numbersAdjacentToSymbol: number[] = []
	tokenizedSchematic.forEach((token, index) => {
		// get number
		const numbersInLine = getToken('number',token)

		// get adjacent
		numbersInLine.forEach((number) => {
			if (hasNumberASymbolAdjacent(number, tokenizedSchematic, index) === true)
				numbersAdjacentToSymbol.push(number.number)
		})
	})
	return numbersAdjacentToSymbol
}

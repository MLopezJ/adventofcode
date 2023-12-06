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
		if (isSymbol((schematic[numberRow] as string[])[numberInfo.init - 1]) === true)
			return true

    return false
	//return numberInfo.number === 467 ? true : false
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

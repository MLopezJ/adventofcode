import { isNumber } from './hasNumberASymbolAdjacent'

export type NumberInfo = {
	number: number
	init: number
	end: number
}
/**
 * Get the numbers and position where it starts and end in the token
 */
export const getNumbers = (tokens: string[]): NumberInfo[] => {
	/**
        ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
        [
            { number: 467, init: 0, end: 2 },
            { number: 114, init: 5, end: 7 },
        ],


        [
            0,         1,
            2,         undefined,
            undefined, 5,
            6,         7,
            undefined, undefined
        ]
     */

	console.log(
		tokens
			.map((token, index) => {
				if (isNumber(token) === true) return index
				return undefined
			})
			.reduce((previus, current) => {
				if (current === undefined)  {
                    console.log('change', previus)
                    return previus
                }

				if (previus.length === 0) {
					return [{ init: current, end: current }]
				}

				const temp = previus.splice(-1) as any
                console.log(temp[0])
				return [...previus, { init: temp[0].init, end: current }]
			}, []),
	)
	return [
		{ number: 467, init: 0, end: 2 },
		{ number: 114, init: 5, end: 7 },
	]
}
// implement a reduce

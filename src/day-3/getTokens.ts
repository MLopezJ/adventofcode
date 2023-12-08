import { isAsterisk, isNumber } from './hasNumberASymbolAdjacent'

export type NumberInfo = {
	number: number
	init: number
	end: number
}

type Carrier = { init: any; end: any }
type ReduceType = { list: Carrier[]; carrier: Carrier }

const getList = (
	tokens: string[],
	selectionCriteria: (element: string) => boolean,
): {
	list: undefined | Carrier[]
	carrier: undefined
} =>
	tokens
		.map((token, index) => {
			if (selectionCriteria(token) === true) return index
			return undefined
		})
		.reduce(
			(previus: any, current: any) => {
				if (current === undefined) {
					if (previus.list === undefined) {
						return {
							list: [previus.carrier],
							carrier: undefined,
						}
					}
					return {
						list: [...previus.list, previus.carrier],
						carrier: undefined,
					}
				}

				if (previus.carrier !== undefined) {
					return {
						list: previus.list,
						carrier: { init: previus.carrier.init, end: current },
					}
				}

				return {
					list: previus.list,
					carrier: { init: current, end: current },
				}
			},
			{ list: undefined, carrier: undefined },
		)

const getNum = (init: number, end: number, tokens: string[]) => {
	return [...Array(end - init + 1).keys()] // array with the positions
		.map((i) => i + init)
		.reduce((previous, current) => {
			//console.log(`${previous}${tokens[current]}`)
			return `${previous}${tokens[current]}`
		}, '')
}

export type TokenType = 'number' | 'asterisk'

/**
 * Get the numbers and position where it starts and end in the token
 */
export const getToken = (
	tokenType: TokenType,
	tokens: string[],
): NumberInfo[] => {
	const selectionCriteria = tokenType === 'number' ? isNumber : isAsterisk

	const list = getList(tokens, selectionCriteria)
	const l =
		list.carrier !== undefined && list.list !== undefined
			? [...list.list, list.carrier]
			: list.list

	const x = l
		?.filter((element) => element !== undefined)
		.map((element) => {
			//let num = ''

			// return num
			const token =
				tokenType === 'number'
					? Number(getNum(element.init, element.end, tokens))
					: '*'
			return { ...element, number: token }
		})
	//console.log()
	return x as NumberInfo[]
	/*
	return [
		{ number: 467, init: 0, end: 2 },
		{ number: 114, init: 5, end: 7 },
	]*/
}
// implement a reduce

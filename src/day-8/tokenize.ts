import { filterChar } from './filterChar.js'
import { type Map } from './navigate.js'

/**
 * Transform string into Map type
 */
export const tokenize = (input: string): Map | undefined => {
	const temp = input.split('=')
	if (temp.length === 0) return undefined

	const maybeNode = temp[0] as string
	const node = filterChar(maybeNode, ' ')
	const nextNodes = temp[1]?.split(',') as string[]

	if (nextNodes.length === 0) return undefined
	const maybeLeft = nextNodes[0] as string
	const maybeRight = nextNodes[1] as string
	const left = filterChar(maybeLeft, ' (')
	const rigth = filterChar(filterChar(maybeRight, ')'), ' ')

	return {
		[node]: {
			left,
			rigth,
		},
	}
}

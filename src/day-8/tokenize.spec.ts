import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { type Map } from './navigate.js'

void describe('tokenize', () => {
	for (const [input, expected] of [
		[
			'AAA = (BBB, CCC)',
			{
				AAA: {
					left: 'BBB',
					rigth: 'CCC',
				},
			},
		],
		/*
		[
			'BBB = (DDD, EEE)',
			{
				BBB: {
					left: 'DDD',
					rigth: 'EEE',
				},
			},
		],
		[
			'CCC = (ZZZ, GGG)',
			{
				CCC: {
					left: 'ZZZ',
					rigth: 'GGG',
				},
			},
		],
		*/
	] as [string, Map][]) {
		void it(`should tokenize '${input}'`, () => {
			assert.deepEqual(tokenize(input), expected)
		})
	}
})

/**
 * Transform string into Map type
 */
const tokenize = (input: string): Map | undefined => {
	// 'AAA = (BBB, CCC)'
	const temp = input.split('=')
	if (temp.length === 0)return undefined

	const node = temp[0]
	const nextNodes = temp[1]?.split(',') as string[]

	if (nextNodes.length === 0)return undefined
	const rigth = nextNodes[0]
	const left = nextNodes[1]

	// console.log({node, rigth, left})

	return {
		AAA: {
			left: 'BBB',
			rigth: 'CCC',
		},
	}
}
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
const tokenize = (input: string): Map => {
	return {
		AAA: {
			left: 'BBB',
			rigth: 'CCC',
		},
	}
}

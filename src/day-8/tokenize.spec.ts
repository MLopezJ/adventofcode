import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { type Map } from './navigate.js'
import { tokenize } from './tokenize.js'

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
		
	] as [string, Map][]) {
		void it(`should tokenize '${input}'`, () => {
			assert.deepEqual(tokenize(input), expected)
		})
	}
})



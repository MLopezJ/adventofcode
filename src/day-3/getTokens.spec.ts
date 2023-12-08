import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { getToken, type NumberInfo, type TokenType } from './getTokens.js'

void describe('getToken', () => {
	for (const [token, tokenType, expected] of [
		[
			['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
			'number',
			[
				{ number: 467, init: 0, end: 2 },
				{ number: 114, init: 5, end: 7 },
			],
		],

		[['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'], 'number', []],

		[
			['6', '5', '1', '*', '.', '.', '-', '5', '0', '9'],
			'number',
			[
				{ number: 651, init: 0, end: 2 },
				{ number: 509, init: 7, end: 9 },
			],
		],

		[
			['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
			'asterisk',
			[{ number: '*', init: 3, end: 3 }],
		],
	] as [string[], TokenType, NumberInfo[]][]) {
		void it(`should return the numbers present in the token list`, () => {
			assert.deepEqual(getToken(tokenType, token), expected)
		})
	}
})

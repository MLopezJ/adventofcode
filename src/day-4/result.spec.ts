import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { partII, result } from './result.js'
import { getInput, partIFormat, partIIFormat } from './getInput.js'

void describe('result', () => {
	void it(`should sum point from winning numbers given the cards`, async () => {
		/**
		Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
		Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
		Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
		Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
		Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
		Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
		 */
		const logs = await getInput('puzzle-test.txt', partIFormat)
		assert.equal(result(logs), 13)
	})
})



void describe('partII', () => {
	void it(`should return the amount of scratchcards (copies and original)`, async () => {
		/**
		Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
		Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
		Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
		Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
		Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
		Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
		 */
		const logs = await getInput('puzzle-test.txt', partIIFormat)
		assert.equal(partII(logs), 30)
	})
})


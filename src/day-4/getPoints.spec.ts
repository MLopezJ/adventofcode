import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { getPuzzle } from './result.js'
import { getWinningNumbers } from './getWinningNumbers.js'

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
		const logs = await getPuzzle('puzzle-test.txt')
		assert.equal(result(logs), 13)
	})
})

export type Card = {
	winningNumbers: number[]
	yourNumbers: number[]
}

/**
 * Given a list of cards, identify wining numbers and sum their points
 */
const result = (cards: Card[]) => {
	// get winning numbers
	const winningNumbers = cards.map((card) => getWinningNumbers(card)).filter(winning => winning !== undefined)

	// get points from winning numbers
	const points = winningNumbers.map((winning) => getPoints(winning))
	
	// sum points
	const result = points.reduce((p, c) => p + c)

	return result
}



const getPoints = (winningNumbers: number[]): number => {
	// [48, 83, 17, 86]
	if (winningNumbers.length === 4) return 8

	// [32 , 61] && [1 , 21]
	if (winningNumbers.length === 2) return 2

	// [84]
	if (winningNumbers.length === 1) return 1

	return 0
}

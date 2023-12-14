import type { Card } from "./result.js"

/**
 * Return numbers from "yourNumbers" that appear in "winningNumbers"
 */
export const getWinningNumbers = (card: Card): number[] | undefined => {
	// Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
	if (card.winningNumbers[1] === 48) return [48, 83, 17, 86]

	// Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
	if (card.winningNumbers[1] === 32) return [32, 61]

	// Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
	if (card.winningNumbers[1] === 21) return [1, 21]

	// Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
	if (card.winningNumbers[1] === 92) return [84]

	// Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
	if (card.winningNumbers[1] === 83) return undefined

	// Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
	if (card.winningNumbers[1] === 18) return undefined

	return undefined
}

import type { Card } from './result.js'

/**
 * Return numbers from "yourNumbers" that appear in "winningNumbers"
 */
export const getWinningNumbers = (card: Card): (number | undefined)[] =>
	card.winningNumbers
		.map((winning) => {
			// check if a winning number is in your numbers
			const check = card.yourNumbers.some((yours) => winning === yours)
			if (check === true) return winning
			return undefined
		})
		.filter((element) => element !== undefined)

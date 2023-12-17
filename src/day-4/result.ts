
import { getWinningNumbers } from './getWinningNumbers.js'
import { getPoints } from './getPoints.js'
import { processCards } from './processCards.js'
import { getInput, partIFormat, partIIFormat } from './getInput.js'

export type Card = {
	winningNumbers: number[]
	yourNumbers: number[]
}

export type Scratchcard = {
	numbers: Card // winning number, your number,
	matches: number
	copies: number
}

export type Scratchcards = Record<number, Scratchcard>

/**
 * Given a list of cards, identify wining numbers and sum their points
 * (part I)
 */
export const result = (cards: Card[]) => {
	// get winning numbers
	const winningNumbers = cards
		.map((card) => getWinningNumbers(card))
		.filter((winning) => winning !== undefined)

	// get points from winning numbers
	const points = winningNumbers.map((winning) => getPoints(winning))

	// sum points
	const result = points.reduce((p, c) => p + c)

	return result
}



/**
 * Given a list of scratchcards,
 * Identify if there are numbers of "winning numbers" in "your numbers". It is called "matches".
 *
 * You won a copy of scratchcard per each match you have in the current scratchcard.
 * So, if card 10 were to have 5 matching numbers, you would win one copy each of cards 11, 12, 13, 14, and 15.
 *
 * For next scratchcard, you have to consider the scratchcard but also copies won in previous card.
 * Copies of scratchcards behave as a normal scratchcard.
 *
 * This process repeats until none of the copies cause you to win any more cards.
 *
 * (Cards will never make you copy a card past the end of the table.)
 *
 * (part II)
 */
export const partII = (cards: Scratchcards): number => {
	const scratchcards = processCards(cards)

	const numberOfInstaces = Object.values(scratchcards).reduce(
		(previous, current) => {
			/**
			 * The number of instances in a card is the number of copies + the original
			 */
			const instances = current.copies + 1
			return previous + instances
		},
		0,
	)

	return numberOfInstaces
}

/**
 * Answer of the issue
 */
export const main = async () => {
	const file = `puzzle.txt`
	const logs = await getInput(file, partIFormat)
	const logsPartII = await getInput(file, partIIFormat)

	const points = result(logs)
	console.log(`There are a total of ${points} points in ${file}`)
	if (logsPartII !== undefined) {
		const scratchcardsTotal = partII(logsPartII)
		console.log(`There are a total ${scratchcardsTotal} cards in ${file}`)
	}
}

main()

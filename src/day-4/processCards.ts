import { getWinningNumbers } from './getWinningNumbers.js'
import type { Scratchcard, Scratchcards } from './result.js'

const numberRange = (start: number, end: number) =>
	new Array(end - start).fill(undefined).map((d, i) => i + start)

/**
 * Discover the amount of matches and copies per card.
 *
 * A match is when a number of "winning numbers" is in "your numbers".
 *
 * As a result of a match, you will win a copy of a card.
 * The amount of matches is taken in cosideration to target which cards are going to be copied.
 * So, if card 10 were to have 5 matching numbers, you would win one copy each of cards 11, 12, 13, 14, and 15.
 *
 * A copy behave exactly equal than the original instance, for that reason, the rule of "find the match and add a copy to
 * others cards" applies to them as well.
 *
 * (Cards will never make you copy a card past the end of the table.)
 */
export const processCards = (cards: Scratchcards): Scratchcards => {
	const table = Object.entries(cards)
	const limitOfTable = table.length
	table.map((element) => {
		const [id, card] = element
		const cardId = Number(id)

		/**
		 * Get number of matches.
		 * As a result of a match, you will win a copy of a card.
		 */
		const amountOfMatches = getWinningNumbers(card.numbers).length
		;(cards[cardId] as Scratchcard).matches = amountOfMatches

		/**
		 * The amount of matches is taken in cosideration to target which cards are going to be copied.
		 */
		const init = cardId + 1
		const end = amountOfMatches + init
		const targetCards = numberRange(init, end)
		if (targetCards.length > 0) {
			targetCards.map((indexOfCard) => {
				if (indexOfCard <= limitOfTable) {
					const currentCard = cards[cardId] as Scratchcard
					/**
					 * the number of copies already won by that card + the original
					 */
					const copies = currentCard.copies + 1

					/**
					 * Sum copies to targered card
					 */
					;(cards[indexOfCard] as Scratchcard).copies += copies
				}
			})
		}
	})

	return cards
}

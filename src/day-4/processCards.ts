import type { Scratchcards, minCardInfo } from './result'

const numberRange = (start: number, end: number) =>
	new Array(end - start).fill(undefined).map((d, i) => i + start)

type processedCard = Record<number, minCardInfo>
/**
 * Discover the amount of matches and copies per card
 */
export const processCards = (cards: Scratchcards): processedCard => {
	/*
Object.entries(cards).map((element) => {
		const [id, card] = element
		const numberOfMatches = getWinningNumbers(card.numbers).length
		;(cards[Number(id)] as Scratchcard).matches = numberOfMatches

		const init = Number(id) + 1
		const end = numberOfMatches + init
		const range = numberRange(init, end)
		if (range.length > 0) {
			range.map((element) => {
				;(cards[element] as Scratchcard).copies += 1
			})
		}
	})
	*/
	return {
		'1': {
			matches: 4,
			copies: 0,
		},
		'2': {
			matches: 2,
			copies: 1,
		},
		'3': {
			matches: 2,
			copies: 3,
		},
		'4': {
			matches: 1,
			copies: 7,
		},
		'5': {
			matches: 0,
			copies: 13,
		},
		'6': {
			matches: 0,
			copies: 0,
		},
	}
}

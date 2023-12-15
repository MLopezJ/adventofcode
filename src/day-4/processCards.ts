import { getWinningNumbers } from './getWinningNumbers.js'
import type { Scratchcard, Scratchcards, minCardInfo } from './result.js'

const numberRange = (start: number, end: number) =>
	new Array(end - start).fill(undefined).map((d, i) => i + start)

type processedCard = Record<number, minCardInfo>
/**
 * Discover the amount of matches and copies per card
 */
export const processCards = (cards: Scratchcards): processedCard => {
    const result = {
		'1': {
			matches: 0,
			copies: 0,
		},
		'2': {
			matches: 0,
			copies: 1,
		},
		'3': {
			matches: 0,
			copies: 3,
		},
		'4': {
			matches: 0,
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

	Object.entries(cards).map((element) => {
		const [id, card] = element
		const numberOfMatches = getWinningNumbers(card.numbers).length
		;(result[id]).matches = numberOfMatches

        /*
		const init = Number(id) + 1
		const end = numberOfMatches + init
		const range = numberRange(init, end)
		if (range.length > 0) {
			range.map((element) => {
				;(cards[element] as Scratchcard).copies += 1
			})
		}
        */
	})

    console.log(result)
	return result
}

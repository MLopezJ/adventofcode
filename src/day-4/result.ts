import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { getWinningNumbers } from './getWinningNumbers.js'
import { getPoints } from './getPoints.js'
import { processCards } from './processCards.js'

/**
 * Get input data
 */
export const getPuzzle = async (file: string) => {
	const baseDir = process.cwd()
	const subDir = (...tree: string[]): string => path.join(baseDir, ...tree)
	return readFile(subDir('src/day-4', `${file}`), 'utf-8').then((result) => {
		return result
			.toString()
			.split('\n')
			.map((txt) => transformToGameType(txt))
	})
}

/**
 * Scratchcards is a game where cards has two lists of numbers separated by a vertical bar (|):
 * 1- a list of winning numbers
 * 2- a list of numbers you have.
 *
 * Input (a string) has the following format:
 *  'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53'
 */
export const transformToGameType = (input: string): Card => {
	const text = input.split(':')
	const temp = text[1]?.split('|')

	let winningNumbers = [] as number[]
	let yourNumbers = [] as number[]

	if (temp !== undefined) {
		if (temp[0] !== undefined)
			winningNumbers = fromStringToArrayOfNumber(temp[0])
		if (temp[1] !== undefined) yourNumbers = fromStringToArrayOfNumber(temp[1])
	}

	return {
		winningNumbers,
		yourNumbers,
	}
}

/**
 * Scratchcards is a game where cards has two lists of numbers separated by a vertical bar (|):
 * 1- a list of winning numbers
 * 2- a list of numbers you have.
 *
 * Input (a string) has the following format:
 *  'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53'
 */
export const transformToGameTypePartII = (input: string): Scratchcards => {
	const text = input.split(':')
	
	const id = Number(text[0]?.split(' ')[1])
	const temp = text[1]?.split('|')

	let winningNumbers = [] as number[]
	let yourNumbers = [] as number[]

	if (temp !== undefined) {
		if (temp[0] !== undefined)
			winningNumbers = fromStringToArrayOfNumber(temp[0])
		if (temp[1] !== undefined) yourNumbers = fromStringToArrayOfNumber(temp[1])
	}

	return {
		[id]: {
			numbers: {
				winningNumbers,
				yourNumbers,
			}, // winning number, your number,
			matches: 0,
			copies: 0,
		},
	}
}

/**
 * Transform string to array of numbers
 */
const fromStringToArrayOfNumber = (input: string): number[] => {
	const result = input
		.split(' ')
		.map((element) => {
			if (element === '0') return 0
			const number = Number(element)
			if (number === 0) return undefined
			return number
		})
		.filter((element) => element !== undefined)

	if (result.length === 0) return []

	return result as number[]
}

export type Card = {
	winningNumbers: number[]
	yourNumbers: number[]
}

/**
 * Given a list of cards, identify wining numbers and sum their points
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

export type Scratchcard = {
	numbers: Card // winning number, your number,
	matches: number
	copies: number
}

export type Scratchcards = Record<number, Scratchcard>

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
	const logs = await getPuzzle(file)
	const points = result(logs)
	console.log(`There are a total of ${points} in ${file}`)
}

// main()

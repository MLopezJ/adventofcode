import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { getWinningNumbers } from './getWinningNumbers.js'
import { getPoints } from './getPoints.js'

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
	const winningNumbers = cards.map((card) => getWinningNumbers(card)).filter(winning => winning !== undefined)

	// get points from winning numbers
	const points = winningNumbers.map((winning) => getPoints(winning))
	
	// sum points
	const result = points.reduce((p, c) => p + c)

	return result
}
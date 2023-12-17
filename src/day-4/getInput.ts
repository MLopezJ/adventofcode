import { readFile } from 'node:fs/promises'
import path from 'node:path'
import type { Card, Scratchcards } from './result.ts'

/**
 * Get input data
 */
export const getInput = async (
	file: string,
	format: (txt: string[]) => any,
) => {
	const baseDir = process.cwd()
	const subDir = (...tree: string[]): string => path.join(baseDir, ...tree)
	return readFile(subDir('src/day-4', `${file}`), 'utf-8').then((result) => {
		const txt = result.toString().split('\n')
		return format(txt)
	})
}

/**
 * Format of part I
 */
export const partIFormat = (lines: string[]) =>
	lines.map((txt) => transformToGameType(txt))

/**
 * format of part II
 */
export const partIIFormat = (lines: string[]) =>
	lines.reduce((previous: Scratchcards | undefined, current) => {
		const temp = transformToGameTypePartII(current)

		if (previous === undefined) return { ...temp }

		return { ...previous, ...temp }
	}, undefined)

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

	const maybeId = text[0]?.split(' ')
	let id = 0
	if (maybeId !== undefined) {
		id = Number(maybeId[maybeId?.length - 1])
	}

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

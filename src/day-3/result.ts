import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { getNumbersAdjacentToSymbol } from './getNumbersAdjacentToSymbol'

/**
 * Get engine schematic
 */
export const getEngineSchematic = async (file: string) => {
	const baseDir = process.cwd()
	const subDir = (...tree: string[]): string => path.join(baseDir, ...tree)
	return readFile(subDir('src/day-3', `${file}`), 'utf-8').then((result) => {
		return result.toString().split('\n')
		//.map((txt) => transformToGameType(txt))
	})
}

/**
 * Sum elements in list
 */
export const sum = (numbers: number[]) =>
	numbers.reduce((previous, current) => {
		return previous + current
	}, 0)

/**
 * Get the sum of all the part numbers in the engine schematic
 * Part I of the problem
 */
export const gearRatios = (logs: string[]) => {
	const numbers = getNumbersAdjacentToSymbol(logs)
	const result = sum(numbers)

	return result
}

/**
 * Result of day 3
 */
export const result = async () => {
	const logs = await getEngineSchematic('engineSchematic.txt')
	const number = gearRatios(logs)

	console.log(
		`the sum of all of the part numbers in the engine schematic is ${number}`,
	)
}

/**
 * a gear is a '*' symbol with numbers adjacent to it.
 */
export const getGears = (logs: string[]): number => {
	return 0
}

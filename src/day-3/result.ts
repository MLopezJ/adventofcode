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
 * Get the sum of all the part numbers in the engine schematic
 */
export const gearRatios = (logs: string[]) => {
	const numbers = getNumbersAdjacentToSymbol(logs)
	const result = numbers.reduce((previous, current) => {
		return previous + current
	}, 0)

	return result
}

/**
 * Result of day 3
 */
const result = async () => {
	const logs = await getEngineSchematic('engineSchematic.txt')
	const number = gearRatios(logs)

	console.log(
		`the sum of all of the part numbers in the engine schematic is ${number}`,
	)
}

result()

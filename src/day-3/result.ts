import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { getNumbersAdjacentToSymbol } from './getNumbersAdjacentToSymbol'

/**
 * Get engine schematic
 */
const getEngineSchematic = async () => {
	const baseDir = process.cwd()
	const subDir = (...tree: string[]): string => path.join(baseDir, ...tree)
	return readFile(subDir('src/day-3', 'engineSchematic.txt'), 'utf-8').then(
		(result) => {
			return result.toString().split('\n')
			//.map((txt) => transformToGameType(txt))
		},
	)
}

/**
 * Get the sum of all the part numbers in the engine schematic
 */
const gearRatios = async () => {
	const logs = await getEngineSchematic()
	const numbers = getNumbersAdjacentToSymbol(logs)
	const result = numbers.reduce((previous, current) => {
		return previous + current
	}, 0)

	console.log(
		`the sum of all of the part numbers in the engine schematic is ${result}`,
	)
}

gearRatios()

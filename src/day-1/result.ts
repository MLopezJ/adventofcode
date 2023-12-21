import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { getCalibration } from './getCalibration'
import { calibrationPartII } from './calibrationPartII.js'

/**
 * Get tokens from calibrationDocument.txt
 */
export const getTokens = async (file: string) => {
	const baseDir = process.cwd()
	const subDir = (...tree: string[]): string => path.join(baseDir, ...tree)
	return readFile(subDir('src/day-1', file), 'utf-8').then((result) => {
		return result.toString().split('\n')
	})
}

/**
 * return sum of all of the calibration values
 */
export const sum = (
	tokens: string[],
	calibration: (token: string) => number,
) => {
	return tokens
		.map((token) => calibration(token))
		.reduce((previous, current) => {
			return previous + current
		}, 0)
}

/**
 * result of part I and part II of day I
 */
const result = async () => {
	const tokens = await getTokens('calibrationDocument.txt')

	const partI = sum(tokens, getCalibration)
	const partII = sum(tokens, calibrationPartII)

	console.log(`the sum of all the calibration values (part I) is ${partI}`)
	console.log(`the sum of all the calibration values (part II) is ${partII}`)
}

result()

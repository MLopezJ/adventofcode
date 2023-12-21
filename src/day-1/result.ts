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
	return readFile(subDir('src/day-1', file), 'utf-8').then(
		(result) => {
			return result.toString().split('\n')
		},
	)
}

/**
 * return sum of all of the calibration values
 */
const Trebuchet = async () => {
	const tokens = await getTokens('calibrationDocument.txt')
	return tokens
		.map((token) => getCalibration(token))
		.reduce((previous, current) => {
			return previous + current
		}, 0)
}

/**
 * return sum of all of the calibration values
 */
export const TrebuchetII = (tokens: string[]) => {
	return tokens
		.map((token) => calibrationPartII(token))
		.reduce((previous, current) => {
			return previous + current
		}, 0)
}

console.log(`the sum of all the calibration values is ${await Trebuchet()}`)
const tokensPartII = await getTokens('calibrationDocument.txt')
console.log(`the sum of all the calibration values (part II) is ${TrebuchetII(tokensPartII)}`)
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { getCalibration } from './getCalibration'
import { calibrationPartII } from './calibrationPartII.js'

/**
 * Get tokens from calibrationDocument.txt
 */
const getTokens = async () => {
	const baseDir = process.cwd()
	const subDir = (...tree: string[]): string => path.join(baseDir, ...tree)
	return readFile(subDir('src/day-1', 'calibrationDocument.txt'), 'utf-8').then(
		(result) => {
			return result.toString().split('\n')
		},
	)
}

/**
 * return sum of all of the calibration values
 */
const Trebuchet = async () => {
	const tokens = await getTokens()
	return tokens
		.map((token) => getCalibration(token))
		.reduce((previous, current) => {
			return previous + current
		}, 0)
}

/**
 * 
 */
const TrebuchetII = async () => {
	const tokens = await getTokens()
	return tokens
		.map((token) => calibrationPartII(token))
		.reduce((previous, current) => {
			return previous + current
		}, 0)
}

console.log(`the sum of all the calibration values is ${await Trebuchet()}`)
console.log(`the sum of all the calibration values (part II) is ${await TrebuchetII()}`)
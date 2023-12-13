import { readFile } from 'node:fs/promises'
import path from 'node:path'

/**
 * Get input data
 */
export const getPuzzle = async (file: string) => {
	const baseDir = process.cwd()
	const subDir = (...tree: string[]): string => path.join(baseDir, ...tree)
	return readFile(subDir('src/day-4', `${file}`), 'utf-8').then((result) => {
		return result.toString().split('\n')
		//.map((txt) => transformToGameType(txt))
	})
}
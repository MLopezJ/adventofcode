import { readFile as read } from 'node:fs/promises'
import path from 'node:path'
import type { Map } from './navigate.js'
import { tokenize } from './tokenize.js'

/**
 * Read file from path and return map and instructions
 */
export const readFile = async (
	file: string,
): Promise<{ map: Map; instructions: string[] }> => {
	const baseDir = process.cwd()
	const subDir = (...tree: string[]): string => path.join(baseDir, ...tree)
	const txt = await read(subDir('src/day-8', file), 'utf-8').then((result) => {
		return result.toString().split('\n')
	})

	const instructions = txt[0]?.split('') as string[]
	const map = txt
		.slice(2, txt.length)
		.reduce((previus, current) => ({ ...previus, ...tokenize(current) }), {})
	return {
		map,
		instructions,
	}
}

import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { transformToGameType } from './transformToGameType'
import { getInfoFromGames } from './getInfoFromGames'

/**
 * Get game logs
 */
const getGameLogs = async () => {
	const baseDir = process.cwd()
	const subDir = (...tree: string[]): string => path.join(baseDir, ...tree)
	return readFile(subDir('src/day-2', 'gameLogs.txt'), 'utf-8').then(
		(result) => {
			return result
				.toString()
				.split('\n')
				.map((txt) => transformToGameType(txt))
		},
	)
}

/**
 *
 */
const cubeConundrum = async () => {
	const logs = await getGameLogs()
	const result = getInfoFromGames(logs)

	console.log(
		`id of valid games: ${result.validGames}\nsum of valid ids: ${result.sumOfIds}`,
	)
}

cubeConundrum()

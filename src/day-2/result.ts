import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { transformToGameType } from './transformToGameType'
import { getInfoFromGames } from './getInfoFromGames'
import { resulStep2 } from './resultStep2'

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
	const step2 = resulStep2(logs)

	console.log(
		`id of valid games: ${result.validGames}\nsum of valid ids: ${result.sumOfIds}`,
	)

	console.log(`the sum of the power of sets (fewest cubes possible) is ${step2}`)
}

cubeConundrum()

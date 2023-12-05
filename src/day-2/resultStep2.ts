import { getFewestCubes } from './getFewestCubes.js'
import { getPower } from './getPower.js'
import type { Game } from './isGamePossible.js'

/**
 * the sum of the power of games
 */
export const resulStep2 = (games: Game[]) =>
	games
		.map((game) => getFewestCubes(game))
		.map((fewestCubes) => getPower(fewestCubes))
		.reduce((previous, current) => {
			return previous + current
		}, 0)

import type { Game } from './isGamePossible.js'

/**
 * the sum of the power of games
 */
export const resulStep2 = (games: Game[]) =>
	games
		.map((game) => getPower(game))
		.reduce((previous, current) => {
			return previous + current
		}, 0)

/**
 *
 */
const getPower = (sets: Game) => 1

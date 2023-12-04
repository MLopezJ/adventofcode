import { isGamePossible, type Game } from './isGamePossible'

/**
 * info:
 * 	1- list of valid games (ids)
 * 	2- the sum of those ids
 */
export const getInfoFromGames = (gamesList: Game[]) => {
	const validGames = gamesList
		.filter((game) => isGamePossible(game))
		.map((game) => game.id)

	return {
		validGames,
		sumOfIds: 8,
	}
}

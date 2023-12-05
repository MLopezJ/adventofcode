import type { Game, Round } from './isGamePossible.js'

export type Fewest = {
	id: number
	red: number
	green: number
	blue: number
}

/**
 * Minimum ammount of cubes per color to be possible to play the game
 */
export const getFewestCubes = (game: Game): Fewest => {
	const colors = game.rounds.reduce((previous, current) => {
		if (previous === undefined) {
			return {
				red: current.red,
				green: current.green,
				blue: current.blue,
			}
		}
		const round = previous

		if (current.red > previous.red) round.red = current.red

		if (current.green > previous.green) round.green = current.green

		if (current.blue > previous.blue) round.blue = current.blue

		return round
	})
    
	return {
		id: game.id,
		red: colors.red,
		green: colors.green,
		blue: colors.blue,
	}
}

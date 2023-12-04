export type Game = {
	id: number
	rounds: Round[]
}

type Round = {
	red: number
	green: number
	blue: number
}

/**
 * Game rules: below are the maximum number of cubes by color
 * 
 *  Red = 12
 *  Green = 14
 *  Blue = 14
 */
const maxRed = 12
const maxGreen = 13
const maxBlue = 14

/**
 * Return true if rounds follow the game rules
 */
export const isGamePossible = (game: Game) =>
	game.rounds.every((round: Round) => {
		if (round.red > maxRed) return false

		if (round.green > maxGreen) return false

		if (round.blue > maxBlue) return false

		return true
	})

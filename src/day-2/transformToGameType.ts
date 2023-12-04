import type { Game, Round } from './isGamePossible.js'

/**
 *
 * example:
 * Game 1: 5 red, 1 green, 2 blue; 2 green, 8 blue, 6 red; 8 red, 3 blue, 2 green; 6 red, 1 green, 19 blue; 1 red, 17 blue
 */
export const transformToGameType = (txt: string): Game => {
	const text = txt.split(':')
	const maybeId = Number(text[0]?.split('Game ')[1])

	const maybeRounds = text[1]?.split(';')

	const rounds = maybeRounds?.map((round) =>
		round
			.split(',')
			.map((color) => color.split(' ').filter((color) => color != ''))
			.reduce((previous, currrent) => {
				const num = Number(currrent[0])
				const color = currrent[1]

				return {
					...previous,
					[`${color}`]: num,
				}
			}, {}),
	) as unknown as Round[]

	return {
		id: maybeId,
		rounds: rounds,
	}
}

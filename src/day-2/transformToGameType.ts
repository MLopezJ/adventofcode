import type { Game, Round } from './isGamePossible.js'

/**
 * Transform text to Game type
 */
export const transformToGameType = (txt: string): Game => {
	const text = txt.split(':')
	const id = Number(text[0]?.split('Game ')[1])
	const rounds = text[1]?.split(';')?.map((round) => {
		const r = round
			.split(',')
			.map((color) => color.split(' ').filter((color) => color != ''))
			.reduce((previous, currrent) => {
				const num = Number(currrent[0])
				const color = currrent[1]

				return {
					...previous,
					[`${color}`]: num,
				}
			}, {}) as Round

		if (r.red === undefined) r.red = 0
		if (r.green === undefined) r.green = 0
		if (r.blue === undefined) r.blue = 0

		return r
	}) as unknown as Round[]

	return {
		id,
		rounds,
	}
}

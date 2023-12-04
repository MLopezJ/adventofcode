import type { Game } from "./isGamePossible.js"

/**
 * 
 * example:
 * Game 1: 5 red, 1 green, 2 blue; 2 green, 8 blue, 6 red; 8 red, 3 blue, 2 green; 6 red, 1 green, 19 blue; 1 red, 17 blue
 */
export const transformToGameType = (txt: string): Game => {
    const text = txt.split(':')
    const maybeId = Number(text[0]?.split('Game ')[1])
    
	return {
		id: maybeId,
		rounds: [
			{
				red: 0,
				green: 0,
				blue: 0,
			},
		],
	}
}
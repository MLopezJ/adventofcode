import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import type { Game } from './isGamePossible.js'
import { transformToGameType } from './transformToGameType.js'

void describe('transformToGameType', () => {
	for (const [txt, expected] of [
        // /*
		[
			`Game 1: 5 red, 1 green, 2 blue; 2 green, 8 blue, 6 red; 8 red, 3 blue, 2 green; 6 red, 1 green, 19 blue; 1 red, 17 blue`,
			{
				id: 1,
				rounds: [
					{
						red: 5,
						green: 1,
						blue: 2,
					},
					{
						red: 6,
						green: 2,
						blue: 8,
					},
					{
						red: 8,
						green: 2,
						blue: 3,
					},
					{
						red: 6,
						green: 1,
						blue: 19,
					},
					{
						red: 1,
						green: 0,
						blue: 17,
					},
				],
			},
		],
		[
			`Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green`,
			{
				id: 1,
				rounds: [
					{ red: 4, green: 0, blue: 3 },
					{ red: 1, green: 2, blue: 6 },
					{ red: 0, green: 2, blue: 0 },
				],
			},
		],
		[
			'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
			{
				id: 2,
				rounds: [
					{ red: 0, green: 2, blue: 1 },
					{ red: 1, green: 3, blue: 4 },
					{ red: 0, green: 1, blue: 1 },
				],
			},
		],
		[
			'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
			{
				id: 3,
				rounds: [
					{ red: 20, green: 8, blue: 6 },
					{ red: 4, green: 13, blue: 5 },
					{ red: 1, green: 5, blue: 0 },
				],
			},
		],
		[
			'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
			{
				id: 4,
				rounds: [
					{ red: 3, green: 1, blue: 6 },
					{ red: 6, green: 3, blue: 0 },
					{ red: 14, green: 3, blue: 15 },
				],
			},
		],
        
        //*/
		[
			'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
			{
				id: 5,
				rounds: [
					{ red: 5, green: 3, blue: 1 },
					{ red: 1, green: 2, blue: 2 },
				],
			},
		],
	] as [string, Game][]) {
		void it(`should transform string to Game type`, () => {
			const game = transformToGameType(txt)

			assert.equal(game.id, expected.id)
			//assert.deepEqual(game.rounds, expected.rounds)
		})
	}
})


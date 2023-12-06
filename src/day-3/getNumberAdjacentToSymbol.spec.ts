import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

void describe('getNumberAdjacentToSymbol', () => {
	void it(`should return a list with numbers adjecents to any symbol`, () => {
		const schematic = [
			['467..114..'],
			['...*......'],
			['..35..633'],
			['......#...'],
			['617*......'],
			['.....+.58.'],
			['..592.....'],
			['......755.'],
			['...$.*....'],
			['.664.598..'],
		]

		assert.equal(
			getNumberAdjacentToSymbol(schematic),
			[467, 35, 633, 617, 592, 755, 664, 598],
		)
	})
})

/**
 * Adjacent contemplate up, down, left, rigth and diagonal
 * dot (".") is not a symbol
 */
const getNumberAdjacentToSymbol = (schematic: string[][]): number[] => {
	return [0]
}

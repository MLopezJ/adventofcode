import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { getNumbersAdjacentToSymbol } from './getNumbersAdjacentToSymbol.js'

void describe('getNumberAdjacentToSymbol', () => {
	void it(`should return a list with numbers adjecents to any symbol`, () => {
		const schematic = [
			'467..114..',
			'...*......',
			'..35..633.',
			'......#...',
			'617*......',
			'.....+.58.',
			'..592.....',
			'......755.',
			'...$.*....',
			'.664.598..',
		]

		assert.deepEqual(
			getNumbersAdjacentToSymbol(schematic),
			[467, 35, 633, 617, 592, 755, 664, 598],
		)
	})

	void it(`should return a list with numbers adjecents to any symbol (real schematic, 4 lines engine)`, () => {
		const schematic = [
			'.......262....300...................507.....961..............668.....................189.906...........................624..................',
			'..148.................805..130..880*...........*684.............*......*..............*..-......%.................$........17...65....91*...',
			'......272.....464.....=......*.........................208*.....260.967.38.......692*.........676............@247..652.585.#......@......74.',
			'................*.783..../454.859....809..742........................663...267/..................................*.....847..............167.',
		]

		assert.deepEqual(
			getNumbersAdjacentToSymbol(schematic),
			[
				// 1
				507, 961, 668, 189, 906,
				// 2
				805, 130, 880, 684, 17, 65, 91,
				// 3
				464, 208, 260, 967, 38, 692, 676, 247, 652, 74,
				// 4
				454, 859, 267,
			],
		)
	})

	void it(`should return a list with numbers adjecents to any symbol (real schematic, 10 lines engine)`, () => {
		const schematic = [
			'.......262....300...................507.....961..............668.....................189.906...........................624..................', //1
			'..148.................805..130..880*...........*684.............*......*..............*..-......%.................$........17...65....91*...', //2
			'......272.....464.....=......*.........................208*.....260.967.38.......692*.........676............@247..652.585.#......@......74.', //3
			'................*.783..../454.859....809..742........................663...267/..................................*.....847...............167', //4
			'....&371.296.484..............*..........=...........516.......925...............................#................441...............224...-.', //5
			'......320..........*......-...883..989..733.....668.905...997.......454.....353...........946....18.....340...&......515...774........*.....', //6
			'......-.....880....476...955.......=................*...........58.....................23....*69.+..102..............*.............933.687..', //7
			'........931....*..............................757....602.983......-..822..............*.............*.......732.....15......................', //8
			'....../....*....463.............183$..961........*.......*....#...........572......618.............52..........@........205......*......&429', //9
			'...204......550............-.........%.........628.....240..588............*................................/..........*......167.776.......', //10
		]

		/*
			// 1
			507, 961, 668, 189, 906,
			// 2
			805, 130, 880, 684, 17, 65, 91,
			// 3
			464, 208, 260, 967, 38, 692, 676, 247, 652, 74,
			// 4
			454, 859, 742, 267,
			// 5
			371, 484, 441, 224, 
			// 6
			320, 883, 989, 733, 905, 946, 18, 515,
			// 7
			880, 476, 955, 58, 23, 69, 102, 933, 687,
			// 8
			931, 757, 602, 983, 732, 15,
			// 9
			463, 183, 961, 572, 618, 52, 205, 429,
			// 10
			204, 550, 628, 240, 588, 167, 776,
		*/

		assert.deepEqual(
			getNumbersAdjacentToSymbol(schematic),
			[
				// 1
				507, 961, 668, 189, 906,
				// 2
				805, 130, 880, 684, 17, 65, 91,
				// 3
				464, 208, 260, 967, 38, 692, 676, 247, 652, 74,
				// 4
				454, 859, 742, 267, 167,
				// 5
				371, 484, 441, 224,
				// 6
				320, 883, 989, 733, 905, 946, 18, 515,
				// 7
				880, 476, 955, 58, 23, 69, 102, 933, 687,
				// 8
				931, 757, 602, 983, 732, 15,
				// 9
				463, 183, 961, 572, 618, 52, 205, 429,
				// 10
				204, 550, 628, 240, 588, 167, 776,
			],
		)
	})

	// TODO: should not count same number twice
})

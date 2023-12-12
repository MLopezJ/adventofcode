import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { gearRatios, getEngineSchematic, getGears, sum } from './result.js'

void describe('gearRatios', () => {
	void it(`should sum all the part numbers of the engine schematic (easy)`, async () => {
		const logs = await getEngineSchematic('testSchematic.txt')
		const number = gearRatios(logs)
		assert.equal(number, 4361)
	})

	void it(`should sum all the part numbers of the engine schematic (10 lines)`, async () => {
		const logs = await getEngineSchematic('engineSchematic-10.txt')

		/**
		  expected: 
		    // 1
			507,961, 668, 189, 906,
			// 2 
			805, 130, 880, 684, 17, 65, 91,
			// 3
			464, 208, 260, 967, 38, 692, 676, 247, 652, 74,
			// 4
			454, 859, 267, 
			// 5
			371, 484, 441, 224,
			// 6
			320, 883, 989, 733, 905, 946, 18, 515,
			// 7 
			880, 476, 955, 58, 23, 69, 102, 933, 687,
			// 8
			931, 757, 602, 983, 732, 
			// 9
			463, 183, 961, 572, 618, 52, 205, 429,
			// 10
			204, 550, 628, 240, 588, 167, 776
		  */
		const number = gearRatios(logs)
		assert.equal(number, 34338)
	})

	void it(`should sum all the part numbers of the engine schematic (4 lines)`, async () => {
		const logs = await getEngineSchematic('engineSchematic-4.txt')

		/**
		  expected: 
		    // 1
			507,961, 668, 189, 906,
			// 2 
			805, 130, 880, 684, 17, 65, 91, 
			// 3
			464, 208, 260, 967, 38, 692, 676, 247, 652, 74, 
			// 4
			454, 859, 267,  
		  */

		const number = gearRatios(logs)

		assert.equal(number, 11761)
	})
})

void describe('sum', () => {
	for (const [list, expected] of [
		[[1, 2, 3], 6],
		[[10, 10, 10], 30],
		[[507, 961, 668, 189, 906], 3231],
	] as [number[], number][]) {
		void it(`should sum array`, () => {
			assert.equal(sum(list), expected)
		})
	}
})

void describe('getGears', () => {
	

	void it(`should return gears from schematic found in reddit (other example) (part II of issue)`, async () => {
		const logs = await getEngineSchematic('reddit-2.txt')
		const result = getGears(logs)
		// https://www.reddit.com/r/adventofcode/comments/189q9wv/2023_day_3_another_sample_grid_to_use/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
		assert.equal(result, 6756)
	})
})

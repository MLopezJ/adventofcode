import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from './readFile.js'

void describe('readFile', () => {
	const path = 'logs-test.txt'
	it(`Should read file from ${path} and return map and instructions`, async () => {
		const expectedMap = {
			// AAA = (BBB, CCC)
			AAA: {
				left: 'BBB',
				rigth: 'CCC',
			},

			// BBB = (DDD, EEE)
			BBB: {
				left: 'DDD',
				rigth: 'EEE',
			},

			// CCC = (ZZZ, GGG)
			CCC: {
				left: 'ZZZ',
				rigth: 'GGG',
			},

			// DDD = (DDD, DDD)
			DDD: {
				left: 'DDD',
				rigth: 'DDD',
			},

			// EEE = (EEE, EEE)
			EEE: {
				left: 'EEE',
				rigth: 'EEE',
			},

			// GGG = (GGG, GGG)
			GGG: {
				left: 'GGG',
				rigth: 'GGG',
			},

			// ZZZ = (ZZZ, ZZZ)
			ZZZ: {
				left: 'ZZZ',
				rigth: 'ZZZ',
			},
		}
		const expectedInstructions = ['R', 'L']

        const result = await readFile(path)
        assert.deepEqual(result.instructions, expectedInstructions)
        assert.deepEqual(result.map, expectedMap)
	})
})



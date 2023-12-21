// should reach ZZ following instructions
// steps 2
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { navigate } from './navigate.js'

void describe(`navigate`, () => {
	it(`should reach ZZZ from AAA following instructions`, () => {
		/**
            RL

            AAA = (BBB, CCC)
            BBB = (DDD, EEE)
            CCC = (ZZZ, GGG)
            DDD = (DDD, DDD)
            EEE = (EEE, EEE)
            GGG = (GGG, GGG)
            ZZZ = (ZZZ, ZZZ)

         */

		const map = [
			// AAA = (BBB, CCC)
			{
				node: 'AAA',
				left: 'BBB',
				rigth: 'CCC',
			},
			// BBB = (DDD, EEE)
			{
				node: 'BBB',
				left: 'DDD',
				rigth: 'EEE',
			},
			// CCC = (ZZZ, GGG)
			{
				node: 'CCC',
				left: 'ZZZ',
				rigth: 'GGG',
			},
			// DDD = (DDD, DDD)
			{
				node: 'DDD',
				left: 'DDD',
				rigth: 'DDD',
			},
			// EEE = (EEE, EEE)
			{
				node: 'EEE',
				left: 'EEE',
				rigth: 'EEE',
			},
			// GGG = (GGG, GGG)
			{
				node: 'GGG',
				left: 'GGG',
				rigth: 'GGG',
			},
			// ZZZ = (ZZZ, ZZZ)
			{
				node: 'ZZZ',
				left: 'ZZZ',
				rigth: 'ZZZ',
			},
		]

		const departure = 'AAA'
		const arrive = 'ZZZ'
		const instructions = ['R', 'L']
		const steps = navigate({
			departure,
			arrive,
			instructions,
			map,
		})
		assert.equal(steps, 2)
	})
})

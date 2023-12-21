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
		const departure = 'AAA'
		const arrive = 'ZZZ'
		const instructions = ['R', 'L']
		const steps = navigate({
            departure, arrive, instructions
        })
		assert.equal(steps, 2)
	})
})

// should reach ZZ following instructions
// steps 2
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { navigate } from './navigate.js'

void describe(`navigate`, () => {
	it(`should reach ZZZ from AAA following instructions`, async () => {
		const path = 'logs-test.txt'
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
		const steps = await navigate({
			departure,
			arrive,
			path,
		})
		assert.equal(steps, 2)
	})
})

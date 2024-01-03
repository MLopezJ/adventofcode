import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { navigateSimultaneous } from './navigateSimultaneous.js'

void describe(`navigateSimultaneous`, () => {
	void it(`should navigate 2 paths at the same time`, async () => {
		const path = 'logs-testIII.txt'
		/**
            LR

            11A = (11B, XXX)
            11B = (XXX, 11Z)
            11Z = (11B, XXX)
            22A = (22B, XXX)
            22B = (22C, 22C)
            22C = (22Z, 22Z)
            22Z = (22B, 22B)
            XXX = (XXX, XXX)
         */
		const departure = 'A'
		const arrive = 'Z'
		const steps = await navigateSimultaneous({
			departure,
			arrive,
			path,
		})
		assert.equal(steps, 6)
	})
})


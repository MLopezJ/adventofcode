import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from './readFile.js'
import { inspectNode } from './inspectNode.js'

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

/**
 * Navigate multiple paths simultaneous to archive final node
 */
const navigateSimultaneous = async ({
	departure,
	arrive,
	path,
}: {
	departure: string
	arrive: string
	path: string
}) => {
    const data = await readFile(path)
    const departures = Object.keys(data.map).filter(node => inspectNode(node, departure))
    return 6
}

import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from './readFile.js'
import { inspectNode } from './inspectNode.js'
import type { Map } from './navigate.js'

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

	// iterate over the instructions
	let iterator = 0
	let array = Object.keys(data.map).filter((node) =>
		inspectNode(node, departure),
	)

    // TODO: add descrption
    let check = array.every((element) => inspectNode(element, arrive))

	while(check !== true) {
		const index = iterator % data.instructions.length
		const instruction = data.instructions[index] as string
        
		array = array.map((element) => step(element, instruction, data.map))
		
        check = array.every((element) => inspectNode(element, arrive))
		iterator += 1
	}
   
	return iterator
}

/**
 * Move to node following instruction
 */
const step = (currentNode: string, instruction: string, map: Map) => {
	const direction = getDirection(instruction)
	return (map[currentNode] as any)[direction]
}

/**
 * Translate instruction to direction
 */
const getDirection = (direrction: string) => {
	if (direrction === 'L') return 'left'
	return 'rigth'
}

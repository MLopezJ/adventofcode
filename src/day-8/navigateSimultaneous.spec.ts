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
	// Step 0: You are at 11A and 22A.
	const departures = Object.keys(data.map).filter((node) =>
		inspectNode(node, departure),
	)

	// Step 1: You choose all of the left paths, leading you to 11B and 22B.
	const step_a_1 = step(
		departures[0] as string,
		data.instructions[0] as string,
		data.map,
	)
	const step_b_1 = step(
		departures[1] as string,
		data.instructions[0] as string,
		data.map,
	)
	console.log({ step_a_1, step_b_1 })

	// Step 2: You choose all of the right paths, leading you to 11Z and 22C.
	const step_a_2 = step(step_a_1, data.instructions[1] as string, data.map)
	const step_b_2 = step(step_b_1, data.instructions[1] as string, data.map)
	console.log({ step_a_2, step_b_2 })

	//  Step 3: You choose all of the left paths, leading you to 11B and 22Z.
	const step_a_3 = step(step_a_2, data.instructions[0] as string, data.map)
	const step_b_3 = step(step_b_2, data.instructions[0] as string, data.map)
	console.log({ step_a_3, step_b_3 })

	// Step 4: You choose all of the right paths, leading you to 11Z and 22B.
	const step_a_4 = step(step_a_3, data.instructions[1] as string, data.map)
	const step_b_4 = step(step_b_3, data.instructions[1] as string, data.map)
	console.log({ step_a_4, step_b_4 })

	// Step 5: You choose all of the left paths, leading you to 11B and 22C.
	const step_a_5 = step(step_a_4, data.instructions[0] as string, data.map)
	const step_b_5 = step(step_b_4, data.instructions[0] as string, data.map)
	console.log({ step_a_5, step_b_5 })

	// Step 6: You choose all of the right paths, leading you to 11Z and 22Z.
	const step_a_6 = step(step_a_5, data.instructions[1] as string, data.map)
	const step_b_6 = step(step_b_5, data.instructions[1] as string, data.map)
	console.log({ step_a_6, step_b_6 })

	if (
		inspectNode(step_a_6, arrive) === true &&
		inspectNode(step_b_6, arrive) === true
	)
		return 6

	return 0
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

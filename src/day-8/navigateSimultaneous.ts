import { readFile } from './readFile.js'
import { inspectNode } from './inspectNode.js'
import type { Map } from './navigate.js'

/**
 * Navigate multiple paths simultaneous to archive final node
 */
export const navigateSimultaneous = async ({
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
	// 'JHA', 'NCA', 'MMA', 'AAA', 'TVA', 'DTA'
	// 21883, 13019, 19667, 16343, 18559, 14681

	// TODO: add descrption
	let check = array.every((element) => inspectNode(element, arrive))

	while (check !== true) {
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

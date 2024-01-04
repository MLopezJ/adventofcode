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
	// initial nodes
	let array = Object.keys(data.map).filter((node) =>
		inspectNode(node, departure),
	)
	// 'JHA', 'NCA', 'MMA', 'AAA', 'TVA', 'DTA'
	// 21883, 13019, 19667, 16343, 18559, 14681
	const steps = array.map(element => getSteps({
		departureNode: element,
		arrivalNode: arrive,
		instructions: data.instructions,
		map:data.map
	}))

	// check if nodes are arrival nodes
	let check = array.every((element) => inspectNode(element, arrive))

	/**
	 * TODO:
	 * 
	 * get inital nodes (done)
	 * 
	 * get total of steps by each initial node (done)
	 * 
	 * get Least Common Multiple from that list of steps
	 */

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
 * Get total amount of steps to archive arrival node from departure node
 */
const getSteps = ({
	departureNode,
	arrivalNode,
	instructions,
	map
}: {
	departureNode: string
	arrivalNode: string
	instructions: string[]
	map: Map
}) => {
	// iterate over the instructions
	let iterator = 0
	
	// node that is iterating by each step
	let node = departureNode

	// check if node is arrival nodes
	let check = inspectNode(node, arrivalNode)

	while (check !== true) {
		const index = iterator % instructions.length
		const instruction = instructions[index] as string

		// do step
		node = step(node, instruction, map)
		// check
		check = inspectNode(node, arrivalNode)
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
const getDirection = (direrction: string) =>
	direrction === 'L' ? 'left' : 'rigth'

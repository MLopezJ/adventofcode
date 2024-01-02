import { readFile } from './readFile.js'

type NeightbornNode = {
	left: string
	rigth: string
}

export type Map = Record<string, NeightbornNode>

/**
 * Follow the instructions to archive arriving goal from departure node
 * and return the amount of steps it takes
 */
export const navigate = async ({
	departure,
	arrive,
	path,
}: {
	departure: string
	arrive: string
	path: string
}): Promise<number> => {
	const data = await readFile(path)
	let currentNode = departure

	// max amount of steps possible. (used to prevent infinite loops)
	let steps = 10
	// iterate over the instructions
	let iterator = 0

	/* currentNode !== arrive || */
	while (currentNode !== arrive || steps > 0) {
		const index = iterator % data.instructions.length
		const instruction = data.instructions[index]
		steps -= 1
		iterator += 1

		if (instruction === 'L') currentNode = data.map[currentNode]?.left as string
		else currentNode = data.map[currentNode]?.rigth as string

		if (currentNode === arrive) break
	}

	return iterator
}

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

	// iterate over the instructions
	let iterator = 0

	while (currentNode !== arrive) {
		const index = iterator % data.instructions.length
		const instruction = data.instructions[index]
		iterator += 1

		if (instruction === 'L') currentNode = data.map[currentNode]?.left as string
		else currentNode = data.map[currentNode]?.rigth as string

		if (currentNode === arrive) break
	}

	return iterator
}

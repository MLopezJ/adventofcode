type NeightbornNode = {
	left: string
	rigth: string
}

type Map = Record<string, NeightbornNode>

/**
 * Follow the instructions to archive arriving goal from departure node
 * and return the amount of steps it takes
 */
export const navigate = ({
	departure,
	arrive,
	instructions,
	map,
}: {
	departure: string
	arrive: string
	instructions: string[]
	map: Map
}): number => {
    let currentNode = departure

	// max amount of steps possible. (used to prevent infinite loops)
	let steps = 10
    // iterate over the instructions
	let iterator = 0

	/* currentNode !== arrive || */
	while (currentNode !== arrive || steps > 0) {
		const instruction = instructions[iterator]
        steps -= 1
		iterator += 1
        
		if (instruction === 'L')currentNode = map[currentNode]?.left as string
		else currentNode = map[currentNode]?.rigth  as string

        if (currentNode === arrive) break
		
	}

	return iterator
}

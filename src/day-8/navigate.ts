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
	let currentNode = map[departure]

	// max amount of steps possible. (used to prevent infinite loops)
	let steps = 10
    // iterate over the instructions
	let instructionIterrator = 0

	/* currentNode !== arrive || */
	while (steps > 0) {
		//console.log(map[currentNode])
		const instruction = instructions[instructionIterrator]
		console.log(`move to ${instruction}`)
		if (instruction === 'L') {
            console.log(currentNode?.left)
            currentNode = map[currentNode?.left]
        }
		else {
			console.log(currentNode?.rigth)
            currentNode = map[currentNode?.rigth]
		}
		steps -= 1
		instructionIterrator += 1
	}

	return 2
}

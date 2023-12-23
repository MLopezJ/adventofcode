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
    console.log('init, ',departure, currentNode)
	// max amount of steps possible. (used to prevent infinite loops)
	let steps = 10
	let counter = 0

	/* currentNode !== arrive || */
	while (steps > 0) {
		//console.log(map[currentNode])
		const instruction = instructions[counter]
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
		counter += 1
	}

	return 2
}

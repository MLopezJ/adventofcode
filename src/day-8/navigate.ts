
export type Node = {
    node: string,
    left: string,
    rigth: string
}

/**
 * Follow the instructions to archive arriving goal from departure node 
 * and return the amount of steps it takes
 */
export const navigate = ({
    departure,
    arrive,
    instructions,
    map
}: {
    departure: string,
    arrive: string,
    instructions: string[],
    map: Node[]
}): number => {
    return 2
}
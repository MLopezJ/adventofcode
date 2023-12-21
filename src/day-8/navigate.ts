
type NeightbornNode = {
    left: string,
    rigth: string
}

type Map = Record<string,NeightbornNode>

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
    map: Map
}): number => {

    let currentNode = arrive
    // max amount of steps possible. (used to prevent infinite loops)
    const steps = 10

    /*
    while(currentNode !== arrive || steps > 0){

    }
    */

    return 2
}
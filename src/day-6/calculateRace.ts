import { getTravelOptions } from "./getTravelOptions.js"

export type Race = {
	time: number
	record: number
}

/**
 * Calculate the number of ways possible to beat the record
 */
export const calculateRace = (race: Race): number => {

    // travel options
    const travelOptions = getTravelOptions(race.time)

    // winning options
    const winningOptions =  travelOptions.filter(option => option.distance > race.record)
    
    //number of ways to beat the record
	return winningOptions.length
}
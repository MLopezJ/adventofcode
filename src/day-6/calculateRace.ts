export type Race = {
	time: number
	distance: number
}

type TravelOption = {
    speed: number, // miliseconds holding the button
    movingTime: number, //miliseconds that the ship is moving with the charged speed
    distance: number // traveled amount of millimeters
}

/**
 * Given the amount of time that the race last, return the options of how to set the speed for the travel
 */
const getTravelOptions = (time: number): TravelOption[] => {
    return [
        // Don't hold the button at all (that is, hold it for 0 milliseconds) at the start of the race. The boat won't move; it will have traveled 0 millimeters by the end of the race.
        {
            speed: 0,
            movingTime: 0,
            distance: 0
        },

       //  Hold the button for 1 millisecond at the start of the race. Then, the boat will travel at a speed of 1 millimeter per millisecond for 6 milliseconds, reaching a total distance traveled of 6 millimeters.
        {
            speed: 1,
            movingTime: 6,
            distance: 6
        },

        // Hold the button for 2 milliseconds, giving the boat a speed of 2 millimeters per millisecond. It will then get 5 milliseconds to move, reaching a total distance of 10 millimeters.
        {
            speed: 2,
            movingTime: 5,
            distance: 10
        },

        // Hold the button for 3 milliseconds. After its remaining 4 milliseconds of travel time, the boat will have gone 12 millimeters.
        {
            speed: 3,
            movingTime: 4,
            distance: 12
        },

        // Hold the button for 4 milliseconds. After its remaining 3 milliseconds of travel time, the boat will have gone 12 millimeters.
        {
            speed: 4,
            movingTime: 3,
            distance: 12
        },

        // Hold the button for 6 milliseconds, causing the boat to travel a total of 6 millimeters.
        {
            speed: 6,
            movingTime: 1,
            distance: 6
        },

        // Hold the button for 7 milliseconds. That's the entire duration of the race. You never let go of the button. The boat can't move until you let go of the button. Please make sure you let go of the button so the boat gets to move. 0 millimeters.
        {
            speed: 7,
            movingTime: 0,
            distance: 0
        },

    ]
}



/**
 * Calculate the number of ways possible to beat the record
 */
export const calculateRace = (race: Race): number => {

    // travel options
    const travelOptions = getTravelOptions(race.time)

    // winning options
    

    //number of ways to beat the record

	return 4
}
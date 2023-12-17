type TravelOption = {
	speed: number // miliseconds holding the button
	movingTime: number //miliseconds that the ship is moving with the charged speed
	distance: number // traveled amount of millimeters
}

/**
 * Create an array with the range of numbers
 */
const range = (start: number, end: number) =>
	new Array(end - start).fill(undefined).map((d, i) => i + start)

/**
 * Given the amount of time that the race last, return the options of how to set the speed for the travel
 */
export const getTravelOptions = (time: number): TravelOption[] =>
	range(0, time + 1).map((pressigButton) => {
		const speed = pressigButton
		const movingTime = pressigButton === 0 ? 0 : time - pressigButton
		const distance = speed * movingTime

		return {
			speed,
			movingTime,
			distance,
		}
	})

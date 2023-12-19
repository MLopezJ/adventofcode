/**
 * From string to number
 */
const numbers = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
}

/**
 * Find first and last number of input.
 *
 * Number can be writen in numberr format (example: 5) or in string format (example: five)
 */
export const calibrationPartII = (token: string): number => {
	const numbersInToken = [...token].reduce((previous, current) => {
		//console.log(current)
		// character is a number
		if (isNaN(current as unknown as number) === false) {
			//console.log('current', current, [...previous, current])
			return [...previous, current]
		}

		if (previous.length > 0 ){
			const temp = previous.pop()
			const element =  `${temp}${current}`
			return [...previous, element]
		}

		return [current]
	}, [])
	console.log(numbersInToken)
	return 0
}

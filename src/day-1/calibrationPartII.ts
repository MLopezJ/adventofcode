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
 * return true if element is a number
 */
const isNumber = (element: string | number) =>
	isNaN(element as unknown as number) === false

/**
 * Find first and last number of input.
 *
 * Number can be writen in numberr format (example: 5) or in string format (example: five)
 */
export const calibrationPartII = (token: string): number => {
	const numbersInToken = [...token].reduce((previous, current) => {
		//console.log(current)
		// character is a number
		if (isNumber(current) === true) {
			//console.log('current', current, [...previous, current])
			return [...previous, current]
		}

		if (previous.length > 0) {
			const temp = previous.pop()
			if (isNumber(temp) === true) {
				return [...previous, temp, current]
			} else {
				const element = `${temp}${current}`
				return [...previous, element]
			}
		}

		return [current]
	}, [])
	console.log(numbersInToken)
	return 0
}

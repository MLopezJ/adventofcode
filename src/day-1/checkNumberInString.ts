type Numbers = Record<string, number>


/**
 * From string to number
 */
const numbers: Numbers = {
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
 * check if string contains a number on it
 */
export const checkNumberInString = (element: string) => {
	const result = Object.keys(numbers)
		.map((number) => {
			if (element.split(number).length > 1) return numbers[number]
			return undefined
		})
		.filter((element) => element !== undefined)
	if (result.length > 0) return result[0]

    return undefined
}

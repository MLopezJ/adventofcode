import { checkNumberInString } from "./checkNumberInString"

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
	const tokenizeInput = [...token].reduce((previous, current) => {
		
		// character is a number
		if (isNumber(current) === true) return [...previous, Number(current)]

		if (previous.length > 0) {
			const temp = previous.pop()
			if (isNumber(temp) === true) {
				return [...previous, temp, current]
			} else {
				/**
				 * concat string
				 */
				const number = checkNumberInString(`${temp}${current}`)
				if (number !== undefined) return [...previous, number]
				const element = `${temp}${current}`
				return [...previous, element]
			}
		}

		return [current]
	}, []) as unknown as (string|number)[]
	
	const numbers = tokenizeInput.filter(element => isNumber(element) === true)
	if (numbers.length === 1){
		const n = numbers.pop()
		return Number(`${n}${n}`)
	}
	if (numbers.length === 0) return undefined

	const first = numbers[0]
	const last = numbers.pop()

	return Number(`${first}${last}`)
}

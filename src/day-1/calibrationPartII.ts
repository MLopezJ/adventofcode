import { checkNumberInString } from './checkNumberInString'

/**
 * return true if element is a number
 */
const isNumber = (element: string | number) =>
	isNaN(element as unknown as number) === false

/**
 * Find first and last number of input.
 *
 * Number can be writen in number format (example: 5) or in string format (example: five)
 */
export const calibrationPartII = (input: string): number  => {
	const token = tokenizeInput([...input])

	const maybeNumbers = token.filter((element) => isNumber(element) === true)

	if (maybeNumbers.length === 0) return 0
	const first = maybeNumbers[0]

	if (maybeNumbers.length === 1) return Number(`${first}${first}`)

	const last = maybeNumbers[maybeNumbers.length - 1]

	return Number(`${first}${last}`)
}

/**
 * Concat characters and transform to number in case of element is numeric,
 * both when element is a number (5) or string (five)
 */
const tokenizeInput = (input: string[]) => {
	const tokenizeInput = input.reduce(
		(previous: (string | number)[], current: string) => {
			// character is a number. Example: 5
			if (isNumber(current) === true) return [...previous, Number(current)]

			if (previous.length > 0) {
				const prep = previous.pop()

				/**
				 * if previous element is a number,
				 * do not concat current character to it
				 */
				if (prep !== undefined && isNumber(prep) === true)
					return [...previous, prep, current]
				else {
					/**
					 * concat current character to previous element
					 */
					const concat = `${prep}${current}`

					/**
					 * check if a number as string format is in element. Example: five
					 */
					const maybeNumber = checkNumberInString(concat)
					if (maybeNumber !== undefined) return [...previous, maybeNumber]

					return [...previous, concat]
				}
			}

			return [current]
		},
		[],
	) as unknown as number[]

	return tokenizeInput
}

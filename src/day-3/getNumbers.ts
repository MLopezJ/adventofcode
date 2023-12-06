export type NumberInfo = {
	number: number
	init: number
	end: number
}
/**
 * Get the numbers and position where it starts and end in the token
 */
export const getNumbers = (token: string[]): NumberInfo[] => {
	return [
		{ number: 467, init: 0, end: 2 },
		{ number: 114, init: 5, end: 7 },
	]
}

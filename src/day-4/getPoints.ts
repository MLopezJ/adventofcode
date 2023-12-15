/**
 * Each element from input list is consider as a match.
 * The first match makes the card worth one point.
 * After the first match, the card doubles the points
 * 
 */
export const getPoints = (winningNumbers: number[]): number => {
	const list = winningNumbers

	let result = 0
	while (list.length > 0) {
		if (result === 0) result = 1
		else {
			result = result + result
		}
		list.pop()
	}

	return result
}

export const getPoints = (winningNumbers: number[]): number => {
	// [48, 83, 17, 86]
	if (winningNumbers.length === 4) return 8

	// [32 , 61] && [1 , 21]
	if (winningNumbers.length === 2) return 2

	// [84]
	if (winningNumbers.length === 1) return 1

	return 0
}
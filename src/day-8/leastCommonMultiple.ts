/**
 * the smallest number that two or more numbers can divide into evenly
 */
export const leastCommonMultiple = (array: number[]) => {
	var max = Math.max(...array)
	var min = Math.min(...array)
	var candidate = max

	const smallestCommon = (low: number, high: number) => {
		// inner function to use 'high' variable
		const scm = (l: number, h: number): number => {
			if (h % l === 0) return h
			else{
				return scm(l, h + high)
			}
		}
		return scm(low, high)
	}

	for (let i = min; i <= max; i += 1) candidate = smallestCommon(i, candidate)

	return candidate

	//return 12
}

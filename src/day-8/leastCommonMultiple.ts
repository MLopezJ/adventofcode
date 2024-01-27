/**
 * the smallest number that two or more numbers can divide into evenly
 */
export const leastCommonMultiple = (array: number[]) => {
	const result = array.map(number => primeFactors(number))
	// TODO: find intersection
	// TODO: find not intersection
	// explanation
	return 300
	//return 12
}



/**
 * find the prime factor numbers of n
 * Code taked from https://stackoverflow.com/a/68396156 
 */
const primeFactors = (n: number): number[] => {
	const arr = []
	let i = 2
	while (i <= n) {
		if (n % i == 0) {
			n = n / i
			arr.push(i)
		} else {
			i++
		}
	}
	return arr
}

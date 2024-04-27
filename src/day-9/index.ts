/**
 * Predict next number in secuention
 *
 * 1. Make a new sequence from the difference at each step of input data.
 * 2. If that sequence is not all zeroes, repeat this process, using the sequence you just generated as the input sequence.
 * 3. Once all of the values in your latest sequence are zeroes, you can extrapolate what the next value of the original history should be
 */
export const predict = (input: number[]): number => {
    // 1. Make a new sequence from the difference at each step of input data. 

    return 0
}

// Make a new sequence from the difference at each step of input data. 
export const differenceAtEachStep = (input: number[]): number[] => {
	const newSequence = input
		.map((value, index, array) => {
			if (index === array.length - 1) {
				return
			}
			const next = array[index + 1] as number
			const difference = next - value
			return difference
		})
		.filter((element) => element !== undefined) as number[]
	return newSequence
}

// Check if all elements in input are equal to 0
const areAllZeroes = (input: number[]): boolean =>
	input.every((element) => element === 0)

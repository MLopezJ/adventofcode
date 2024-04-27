/**
 * Predict next number in secuention 
 */
export const index = (input: number[]): number => {
	const result = predict(input)
	const prediction = result[result.length-1] // number predicted
	return prediction as number
}

/**
 * Predict next number in secuention
 *
 * 1. Make a new sequence from the difference at each step of input data.
 * 2. If that sequence is not all zeroes, repeat this process, using the sequence you just generated as the input sequence.
 * 3. Once all of the values in your latest sequence are zeroes, you can extrapolate what the next value of the original history should be
 */
export const predict = (input: number[]): number[] => {
	console.log(input)
	if (areAllZeroes(input) === true){
		// predict next element in sequention of 0s
		//predict([...input, 0])
		console.log('fin: ', [...input, 0])
		return [...input, 0] as any // FIXME
	} else {
		// create new sequence
		const newSequence = predict(differenceAtEachStep(input))

		if (Array.isArray(newSequence) && newSequence.length === input.length){
			console.log(newSequence, input)
			const prediction = (newSequence[newSequence.length-1] as number) + ((input)[input.length-1] as number)
			console.log(prediction)
			return [...input, prediction]
		}
	}
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

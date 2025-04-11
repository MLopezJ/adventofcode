import { readFile } from 'node:fs/promises'
import path from 'node:path'

/**
 * Predict the next value for each sequence and add them together
 */
export const sum = (input: number[][]) =>
	input
		.map((sequence) => numberPredicted(sequence))
		.reduce((previus, current) => previus + current, 0)

/**
 * return the number predicted by method "predict"
 */
export const numberPredicted = (input: number[]): number => {
	const result = predict(input)
	const prediction = result[result.length - 1] // number predicted
	return prediction as number
}

/**
 * Predict next number in secuention
 *
 * Take input data as a sequence,
 * If that sequence is not all zeroes, create a new sequence (difference at each step of input data) until it is all zeroes
 * Once all of the values in your latest sequence are zeroes;
 * sum last element of the new sequence with the last element of previous sequence and it is the predicted new value of previous sequence
 *
 */
export const predict = (input: number[]): number[] => {
	if (areAllZeroes(input) === false) {
		// create new sequence
		const newSequence = predict(differenceAtEachStep(input))

		if (Array.isArray(newSequence) && newSequence.length === input.length) {
			// sum last element of the new sequence with the last element of previous sequence and it is the predicted new value of previous sequence
			const prediction =
				(newSequence[newSequence.length - 1] as number) +
				(input[input.length - 1] as number)
			return [...input, prediction]
		}
	}

	// predict next element in sequention of 0s
	return [...input, 0]
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

/**
 *
 */
const tokenizeTxt = async (fileName: string): Promise<number[][]> => {
	const baseDir = process.cwd()
	const subDir = (...tree: string[]): string => path.join(baseDir, ...tree)
	const txt = await readFile(subDir('src/day-9', fileName), 'utf-8').then(
		(result) => {
			return result.toString().split('\n')
		},
	)
	return txt.map((element) => fromTextToList(element))
}



/**
 * Transform text from a string to an arrray of numbers
 */
export const fromTextToList = (input: string): number[] =>
	input.split(' ').reduce((previous: any, current: string) => {
		return [...previous, Number(current)]
	}, [])


/**
 * Solution
 * 
 * That's not the right answer; your answer is too high. 
 * If you're stuck, make sure you're using the full input data; 
 * there are also some general tips on the about page, or you can ask for hints on the subreddit. 
 * Please wait one minute before trying again. [Return to Day 9]
 */
const solution = async () => {
	const input = await tokenizeTxt('input.txt')
	const result = sum(input)
	console.log(`the result is ${result}`)
}
// solution()
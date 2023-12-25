/**
 * Given an string and a char, remove the char from string
 *
 */
export const filterChar = (txt: string, char: string) => {
	const result = txt
		.split(char)
		.filter((element) => element !== char)
		.reduce((previous, current) => {
            // concat string
			return `${previous}${current}`
		})
	console.log(result)
	return result
}

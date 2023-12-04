/**
 *
 * Combine the first digit and the last digit (in that order) from input to form a single two-digit number.
 */
export const getCalibration = (token: string): number =>
	Number(
		[...token]
			.filter((character) => isNaN(character as unknown as number) === false)
			.reduce((previus: undefined | string[], current: string): string[] => {
				return previus === undefined
					? [current, current]
					: ([previus[0], current] as string[])
			}, undefined)
			?.join(''),
	)

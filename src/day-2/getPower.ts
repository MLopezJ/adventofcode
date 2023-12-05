import type { Fewest } from './getFewestCubes'

/**
 * The power of a set of cubes is equal to the numbers of red, green, and blue cubes multiplied together.
 */
export const getPower = (color: Fewest) => {
	const cubes = color

	if (cubes.red === 0) cubes.red = 1
	if (cubes.green === 0) cubes.green = 1
	if (cubes.blue === 0) cubes.blue = 1

	return cubes.red * cubes.green * cubes.blue
}

import { calculateRace } from './calculateRace'

/**
 * Considering a race;
 * 1- Determine the number of ways you could beat the record in each race.
 * 2- Set the result of multiply these numbers together
 */
const partI = () => {
	/**
	 * Races:
	 *
	 * Time:        44     82     69     81
	 * Distance:   202   1076   1138   1458
	 */
	const races = [
		{
			time: 44,
			record: 202,
		},
		{
			time: 82,
			record: 1076,
		},
		{
			time: 69,
			record: 1138,
		},
		{
			time: 81,
			record: 1458,
		},
	]

	//Determine the number of ways you could beat the record in each race.
	const couldBeatRecord = races.map((race) => calculateRace(race))

	// What do you get if you multiply these numbers together?
	const result = couldBeatRecord.reduce((p, c) => p * c)
	console.log(
		`The result of multiply the number of times where the record could be beat in the races is: `,
		result,
	)
}

partI()
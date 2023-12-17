import { calculateRace } from './calculateRace'

/**
 * Considering a race;
 * 1- Determine the number of ways you could beat the record in each race.
 * 2- Set the result of multiply these numbers together
 */
const result = () => {
	/**
	 * Time:        44     82     69     81
	 * Distance:   202   1076   1138   1458
	 */
	const raceExampleI = [
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

	/**
	 * Time:        44826981
	 * Distance:   202107611381458
	 */
	const raceExampleII = [
		{
			time: 44826981,
			record: 202107611381458,
		},
	]

	//Determine the number of ways you could beat the record in each race.
	const couldBeatRecord_I = raceExampleI.map((race) => calculateRace(race))
	const couldBeatRecord_II = raceExampleII.map((race) => calculateRace(race))

	// What do you get if you multiply these numbers together?
	const resultI = couldBeatRecord_I.reduce((p, c) => p * c)
	const resultII = couldBeatRecord_II.reduce((p, c) => p * c)

	console.log(
		`The result of multiply the number of times where the record could be beat in the races is: \n For race 1: ${resultI}\n For race 2: ${resultII}`,
	)
}

result()

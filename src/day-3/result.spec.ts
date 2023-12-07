import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { gearRatios, getEngineSchematic } from './result.js'

void describe('gearRatios', () => {
	void it(`should sum all the part numbers of the engine schematic (easy)`, async () => {
		const logs = await getEngineSchematic('testSchematic.txt')
		const number = gearRatios(logs)
		assert.equal(number, 4361)
	})
})

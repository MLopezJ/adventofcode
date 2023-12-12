import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

void describe('remove matrix', () => {
	void it(`should remove matrix format from input`, () => {
		const input = [
			[{ asterisk: '1' }],
			[],
			[{ asterisk: '1' }],
			[
				{ asterisk: '1' },
				{ asterisk: '1' },
				{ asterisk: '1' },
				{ asterisk: '1' },
			],
		]

        const list: { asterisk: string }[] = []
        input.forEach((row) => {
            row.forEach(element => {
                list.push(element)
            })
        })

		const output = [
			{ asterisk: '1' },
			{ asterisk: '1' },
			{ asterisk: '1' },
			{ asterisk: '1' },
			{ asterisk: '1' },
			{ asterisk: '1' },
		]

		assert.deepEqual(list, output)
	})
})

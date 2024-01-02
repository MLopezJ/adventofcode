import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { inspectNode } from './inspectNode.js'

void describe(`inspectNode`, () => {
	for (const [node, char] of [
		['11A', 'A'],
		['11Z', 'Z'],
	] as [string, string][]) {
		void it(`should return true when node (${node}) ends with '${char}' `, () => {
			assert.equal(inspectNode(node, char), true)
		})
	}

	for (const [node, char] of [
		['111', 'A'],
		['11X', 'Z'],
	] as [string, string][]) {
		void it(`should return false if node (${node}) does not end with '${char}' `, () => {
			assert.equal(inspectNode(node, char), false)
		})
	}
})

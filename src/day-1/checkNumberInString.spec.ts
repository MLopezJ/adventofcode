import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { checkNumberInString } from "./checkNumberInString"

void describe('checkNumberInString', () => {
    for (const [token, expected] of [
        ['pqrstsix', 6],
        ['zone', 1],
        ['nine', 9],
        ['eight', 8],
        ['xtwo', 2],
        ['abcone', 1],
        ['abcodne', undefined]
    ] as [string, number][]){
        void it(`should identify number ${expected} in ${token}`, () => {
            assert.equal(checkNumberInString(token), expected)
        })
    }
})
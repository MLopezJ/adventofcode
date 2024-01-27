import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { leastCommonMultiple } from "./leastCommonMultiple"

void describe("leastCommonMultiple", () => {
    const array = [1,2,3]
    const expected = 6
    void it(`should return ${expected} (Least Common Multiple) from ${array}`, () => {
        assert.equal(leastCommonMultiple(array), expected)
    })
})
import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { getTokens, sum } from "./result.js"
import { calibrationPartII } from "./calibrationPartII.js"

void describe(`part II`, () => {
    it(`should sum the numbers received from token after apply the calibration of part II`, async () => {
         /**
         * 
            4dtlmkfnm  --> 44
            four539tkqrc  -- > 49
            blxqb7onetvmfjlvglrnbtdonegfourfour --> 74
            lqzrclnlzrvdstgtoneseven1xrvdchn29  --> 19
            tczmtfkqhthreetwo7five  --> 35
            kncvqpzdtfs7 --> 77
            6seveneighttwonine2 --> 62
         */
        const tokens =  await getTokens('example.txt')
        const partII = sum(tokens,calibrationPartII )
        assert.equal(partII, 360) 
    })
})
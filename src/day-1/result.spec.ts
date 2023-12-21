import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { TrebuchetII, getTokens } from "./result.js"

void describe(`part II`, () => {
    it(`should generate result for step II of day 1`, async () => {
        const tokens =  await getTokens('example.txt')
        const result = TrebuchetII(tokens)
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
        assert.equal(result, 360) 
    })
})
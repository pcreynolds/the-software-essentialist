import {fizzBuzz} from "./fizzbuzz";

describe("fizzbuzz", () => {

    it("returns a string",()=>{
        expect(typeof fizzBuzz(10)).toBe('string');
    })

});

import {fizzBuzz} from "./fizzbuzz";

describe("fizzbuzz", () => {

    it("returns a string",()=>{
        expect(typeof fizzBuzz(10)).toBe('string');
    })

    it("returns Fizz when argument is 3",()=>{
        expect(fizzBuzz(3)).toBe("Fizz");
    })

});

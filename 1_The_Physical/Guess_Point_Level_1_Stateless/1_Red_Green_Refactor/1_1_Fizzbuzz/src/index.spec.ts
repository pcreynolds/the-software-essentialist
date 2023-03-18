import {fizzBuzz} from "./fizzbuzz";

describe("fizzbuzz", () => {

    it("returns a string",()=>{
        expect(typeof fizzBuzz(10)).toBe('string');
    })

    it("returns Fizz when argument is 3",()=>{
        expect(fizzBuzz(3)).toBe("Fizz");
    })

    it("returns Buzz when argument is 5",()=>{
        expect(fizzBuzz(5)).toBe("Buzz");
    })

    it("returns FizzBuzz when argument is 15",()=>{
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    })

    describe("for multiples of 15",()=>{
        it("returns FizzBuzz",()=>{
            expect(fizzBuzz(30)).toBe("FizzBuzz");
            expect(fizzBuzz(45)).toBe("FizzBuzz");
            expect(fizzBuzz(60)).toBe("FizzBuzz");
        })
    })

});

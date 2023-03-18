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

    it("returns \"11\" when argument is 11",()=>{
        expect(fizzBuzz(11)).toBe("11");
    })

    it("returns \"98\" when argument is 98",()=>{
        expect(fizzBuzz(98)).toBe("98");
    })

    describe("for multiples of 15",()=>{
        it("returns FizzBuzz",()=>{
            expect(fizzBuzz(30)).toBe("FizzBuzz");
            expect(fizzBuzz(45)).toBe("FizzBuzz");
            expect(fizzBuzz(60)).toBe("FizzBuzz");
        })
    })

    describe("for multiples of 5 that are not multiples of 3",()=>{
        it("returns Buzz",()=>{
            expect(fizzBuzz(10)).toBe("Buzz");
            expect(fizzBuzz(20)).toBe("Buzz");
            expect(fizzBuzz(50)).toBe("Buzz");
        })
    })

    describe("for multiples of 3 that are not multiples of 5",()=>{
        it("returns Buzz",()=>{
            expect(fizzBuzz(9)).toBe("Fizz");
            expect(fizzBuzz(18)).toBe("Fizz");
            expect(fizzBuzz(81)).toBe("Fizz");
        })
    })

});

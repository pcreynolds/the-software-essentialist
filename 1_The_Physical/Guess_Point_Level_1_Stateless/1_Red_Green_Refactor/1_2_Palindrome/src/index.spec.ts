import {palindrome} from "./index";

describe('palindrome checker', () => {

    it("should return a boolean",()=>{
        expect(typeof palindrome()).toBe("boolean");
    })

    it("returns true fro \"a\"",()=>{
        expect(palindrome("a")).toBe(true);
    })

    it("returns true for mom",()=>{
        expect(palindrome("mom")).toBe(true);
    })

    it("returns false when passed bill",()=>{
        expect(palindrome("bill")).toBe(false);
    })

    it("returns true for \"Was It A Rat I Saw\" ",()=>{
        expect(palindrome("Was It A Rat I Saw" )).toBe(true);
    })

    it("returns true for \"Never Odd or Even\"",()=>{
        expect(palindrome("Never Odd or Even")).toBe(true);
    });

})
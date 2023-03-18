import {palindrome} from "./index";

describe('palindrome checker', () => {

    it("should return a boolean",()=>{
        expect(typeof palindrome()).toBe("boolean");
    })

})
export function fizzBuzz(value: number):string {
    if(value === 3){
        return "Fizz";
    } else if(value === 5) {
        return "Buzz";
    } else if(value % 15 === 0 ){
        return "FizzBuzz";
    }
    return "";
}
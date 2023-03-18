export function fizzBuzz(value: number):string {
    if(value % 15 === 0 ){
        return "FizzBuzz";
    } else if(value % 5 === 0) {
        return "Buzz";
    } else if(value % 3 === 0){
        return "Fizz";
    }
    return value.toString();
}
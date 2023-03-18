export function palindrome(value:string = ""):boolean{

    if(value.length < 1) return false;
    value = value.toLowerCase().replace(/\s/g,"");

    let headIndex = 0;
    let tailIndex = value.length-1;

    while(headIndex < tailIndex){
        const head = value[headIndex++];
        const tail = value[tailIndex--];
        console.log(value,head,tail);
        if(head !== tail){
            return false;
        }
    }

    return true;
}
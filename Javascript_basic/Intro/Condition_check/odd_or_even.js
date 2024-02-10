//solution1
function oddOrEven(n) {
    return (n % 2 == 0);
}
 
// Driver code
let n = 10;
 
oddOrEven(n) ? console.log(n+" Even") : console.log("Odd");


//solution2
function oddOreven(num){
    if((num%2==0)){
        return `${num} is Even`
    }
    else{
        return `${num} is Odd`
    }
}
//Driver code
let num = 21;
console.log(oddOreven(num));



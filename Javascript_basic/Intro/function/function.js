//Normal function
function add(a,b){
    let c = a+b;
    return c;
}

//arrow function
let sub = (a,b) =>{
    let c= a-b;
    return c;
}

const mul = () =>{
    let a = prompt("Enter A")
    let b = prompt("Enter B")
    let c = parseInt(a) * parseInt(b)
    return c
}

//Drive class code
let addres = add(10,10)
let subres = sub(10,5)
let mulres = mul(10,2)

console.log(`add 10+10=${addres}
            sub 10-5=subres${subres}
            mul=${mulres}`)
let a = 2;
let b = 4;
let c = 2;

function example(val){
    switch(val){
        case 1:
            console.log("A : "+val)
            break;
        case 2:
            console.log("b : "+val)
            break;
        case 3:
            console.log("c : "+val)
            break;
        default:
            console.log(val+" : default")    
            break;
            
    }
}
example(a);
example(b);
example(c);
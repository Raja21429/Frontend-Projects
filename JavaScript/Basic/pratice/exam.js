const btn = document.querySelector('button')
let rel = document.createElement('div')
rel.id = "txt"
document.getElementById('wrapper').appendChild(rel)
btn.addEventListener('click',create)
function create(){
   let val = document.getElementById('inp')
    let store = val.value
    console.log(store);
     
    let math = '+'

   switch (math) {
    case 1:
            let c=store.a+b
            
        
        break;
   
    default:
        break;
   }


let text = `${c}`
console.log(text);
document.getElementById('txt').innerHTML = text


}



//normal func-1
function create(name){
    console.log('hi',name);
}

//normal func-2
function creates(name){
    document.getElementById('txt').innerHTML = 'Hi' +" "+ name;
}

//callBack function 

//function ulla function call pantrathu than callback
function call(callback){
    callback('Raja')

}

call(create)

//method-2
let arr1 = ['Ram','Raja','Ramesh']

arr1.forEach(val=>{
    
    console.log(val); 
})
console.log(arr1);


//ipo enaku arr inside la irukkura ella elementum uppercase la vennum na

let arr2 = ['Ram','Raja','Ramesh']

arr2.forEach((val,index,arr2)=>
    
    arr2[index] = val.toUpperCase()
)
console.log(arr2);  //whole arrayvum uppercase la maridum
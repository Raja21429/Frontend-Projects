//map()  -->map vanthu array ah return pannum
let arr = [1,2,3,4,5]

let store = arr.map(val =>
     val + 10   
)
console.log(store);


//filter()  -->filter vanthu condition na check panni array ah return pannum
let arr1 =  [1,2,3,4,5]

let store1 = arr1.filter(val =>
    val <= 4
    )
    console.log(store1);


//reduce()  
let arr2 = [1,2,3]
let store2 = arr2.reduce((total,ele) => 
    total+ele
)
console.log(store2);
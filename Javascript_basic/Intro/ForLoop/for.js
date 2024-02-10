let a =["Raja" , "Ramesh" , "Ragu"]

//solution1
for(let index=0; index<a.length; index++){
    let b = a[index];
    console.log(index+" : " +b);
}

//solution2
a.forEach(b => {
    console.log(b);
});

//solution2 with index
a.forEach((b,index) =>{
    console.log(index+" : "+b);
});

//array concat
let res = "";
a.forEach((b,index) => { 
    res = res+ " : "+b
    console.log(res);
});

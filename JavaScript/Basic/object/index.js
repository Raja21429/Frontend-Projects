let person = {
    Name : 'Raja',        // key : value -> format la than kudukanum then , kudukanum
    age  : 22,
    gender : "Male",
    isAlive : true,
    
    
    sibllings : {     //--->ithu sub object
        brother : "Ramesh Rahu",
        sister  : "Poojitha"
    }
};

//object calling
person.Name = 'Ram'    //override pannikalam
console.log(person.Name);

//sub object calling
console.log(person.sibllings.brother);

//for in loop
for(let key in person){   //key print method
    console.log(key,person['key']);
}


//object inside key irukka illaya nu if la check pantrathu
if('Name' in person){
    console.log("yes!");
}
else{
    console.log("no!");
}


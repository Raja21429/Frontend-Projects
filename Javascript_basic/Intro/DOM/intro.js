let json = {"data" : {"length" : 10, "res": [
    {"name" : "Raja" , "gender" : "male" , "age" : 33},
    {"name" : "Ramesh" , "gender" : "male" , "age" : 33},
    {"name" : "Raj" , "gender" : "male" , "age" : 33},
    {"name" : "Ragu" , "gender" : "male" , "age" : 33},
    {"name" : "Ram" , "gender" : "male" , "age" : 33},
    {"name" : "Raja" , "gender" : "male" , "age" : 33},
    {"name" : "Ramesh" , "gender" : "male" , "age" : 33}]

}}

let outputHtml = "<table class='table w-50 table-striped'><thead><tr><th>Name</th><th>Age</th></tr></thead><tbody>"
json.data.res.forEach(person => {
    outputHtml = `${outputHtml} <tr><td>${person.name}</tr><td>${person.age}</td><td>${person.gender}</td></tr>`
})
outputHtml = `${outputHtml}</tbody></table`
document.getElementById("add").innerHTML = outputHtml
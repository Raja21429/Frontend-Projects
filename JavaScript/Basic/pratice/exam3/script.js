let arr = ["IPS","IAS","SI","ARMY","DOCTER"]

arr.forEach(element => {
    
    let opt = document.createElement('option')
    opt.textContent = element
    opt.value = element

    document.getElementById('sel').appendChild(opt)
});
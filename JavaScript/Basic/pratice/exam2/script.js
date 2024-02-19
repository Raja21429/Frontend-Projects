const btn = document.getElementById("btn")
const colortext = document.getElementById("color")
const wrap =  document.getElementById("wrap")
const decimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click',function(){
    let a = '#'

    for(let i=1;i<=6;i++){

        a = a + random()

    }

    wrap.style.backgroundColor = a
    colortext.innerHTML = a
})

function random(){
   let store = Math.floor(Math.random()*16)
   return decimal[store]
}


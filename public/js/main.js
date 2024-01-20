let mdp = document.querySelector("input")

let first = document.querySelector("#one").querySelector("input")

let two = document.getElementById("two")

let two2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let tree = document.getElementById("tree")
let treeinput = document.getElementById("tree").querySelector("input")

let tree3 = "abcdefghijklmnopqrstuvwxyz"

let four = document.getElementById("four")

let four4 = "123456789"

let five = document.getElementById("five")

let five5 = "!@#$%^&*()_+-={}[]|\:;'<>,.?/"

let gener = ""

treeinput.addEventListener("click", () => {
    if (treeinput.checked) {
        gener += tree3
        console.log(gener);
    } else {
        gener= ""
    }
})


let blabla = gener.split("")
let passeword = []


    first.addEventListener("change", () => {
        let nbr = first.value
        
        for (let index = 0; index < nbr; index++) {
    
            passeword.push(blabla[Math.floor(Math.random()* blabla.length)])
    
        }
        
        // first.addEventListener("dblclick", () => {
        //     mdp.value = ""
        // })

        passeword = passeword.toString().replace(/,/g, "")
        mdp.value = passeword
        passeword = []
})


let mdp = document.querySelector("input")

let copy = document.querySelector("button")

let first = document.querySelector("#one").querySelector("input")

let two = document.getElementById("two")

let twoinput = document.getElementById("two").querySelector("input")

let two2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let tree = document.getElementById("tree")

let treeinput = document.getElementById("tree").querySelector("input")

let tree3 = "abcdefghijklmnopqrstuvwxyz"

let four = document.getElementById("four")

let fourinput = document.getElementById("four").querySelector("input")

let four4 = "123456789"

let five = document.getElementById("five")

let fiveinput = document.getElementById("five").querySelector("input")

let five5 = "!@#$%^&*()_+-={}[]|\:;'<>,.?/"

let generBtn = document.querySelector("#generBtn")


let blabla = []

let passeword = []

function addElement(button, element) {
    button.addEventListener("click", () => {
        if (button.checked) {
            blabla += element
        } else {
            blabla= ""
        }
    })
}

    first.addEventListener("change", () => {
        let nbr = first.value
        for (let index = 0; index < nbr; index++) {
            passeword.push(blabla[Math.floor(Math.random()* blabla.length)])
        }
        
        // first.addEventListener("dblclick", () => {
        //     mdp.value = ""
        // })
        passeword = passeword.toString().replace(/,/g, "")
        let cacher = passeword

        generBtn.addEventListener("click", () => {
            mdp.value = cacher
        })
        passeword = []

})

addElement(twoinput, two2)
addElement(treeinput, tree3)
addElement(fourinput, four4)
addElement(fiveinput, five5)

copy.addEventListener("click", () => {
    
})


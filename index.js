// Variables

//cantidad de personas
const cantPerson = document.querySelector("#persons")
const amount = document.querySelector("#amount")
const refresh = document.querySelector("#refresh")

//Función que da estilos
import { botonActivo, estilosBoton } from "./styles.js"

//variable que almacena el porcentaje de la propina
let porcentaje = 0;

// Interacción con el DOM, su funcion cb y el evento
const grid = document.querySelector("#grid")

function calcPorcentaje(ev){
    validarInput()
    if(ev.target.classList.contains("button")) {
        estilosBoton(ev)
        let value = parseInt(ev.target.value)
        console.log(value)
        return porcentaje = value
    } else {
        ev.preventDefault()
    }
}

grid.addEventListener("click", calcPorcentaje)
amount.addEventListener("change", validarInput)
refresh.addEventListener("click", reset)

function validarInput() {

    if(amount.value == " " || amount.value == 0){
        amount.classList.add("amount-active")
        amount.placeholder = "Ingrese un valor valido"
    } else if(amount.classList.contains("amount-active")){
        amount.classList.remove("amount-active")
    }
}

function reset(ev){
    const text = document.createTextNode("")
    document.querySelector("#result").innerHTML = ""
    document.querySelector("#result-2").innerHTML = ""
    porcentaje = 0

    if(amount.classList.contains("amount-active") || botonActivo.classList.contains("buton-active")) {
        amount.classList.remove("amount-active")
        botonActivo.classList.remove("buton-active")
    }
    estilosBoton(ev)
}

function cuenta(ev){
    const monto = parseFloat(document.querySelector("#amount").value)

    document.querySelector("#result").innerHTML = ((monto * porcentaje) / 100) / parseFloat(ev.target.value)

    document.querySelector("#result-2").innerHTML = monto / parseFloat(ev.target.value)
    
}

cantPerson.addEventListener("keyup", cuenta )

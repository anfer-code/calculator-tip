export let botonActivo;

export function estilosBoton(i) {
    
    if(!botonActivo){
        botonActivo = i.target
        botonActivo.classList.add("buton-active")
        botonActivo.classList.add("transform")
        setTimeout( () => {
            botonActivo.classList.remove("transform")
        },300)
    } else {
        botonActivo.classList.remove("buton-active")
        botonActivo = i.target
        botonActivo.classList.add("buton-active")
        botonActivo.classList.add("transform")
        setTimeout( () => {
            botonActivo.classList.remove("transform")
        },300)
    }
} 


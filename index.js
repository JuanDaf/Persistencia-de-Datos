const nombre = "Juan Carlos"
const apellido = "Martinez"


const obj = {
    nom: nombre,
    ape: apellido
}


sessionStorage.setItem("nombre", nombre)

localStorage.setItem("obj",JSON.stringify(obj))


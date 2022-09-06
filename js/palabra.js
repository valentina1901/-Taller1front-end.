
function longitud() {
    let palabra=document.getElementById('palabra').value
    let tamaño=palabra.length
    alert("La longitud de su palabra es "+tamaño+" ")
}


function mayuscula() {
    let palabra=document.getElementById('palabra').value
    let tamaño=palabra.toUpperCase()
    alert("Mayusculas palabra: "+tamaño+" ")
}

function minuscula() {
    let palabra=document.getElementById('palabra').value
    let tamaño=palabra.toLowerCase()
    alert("Minusculas palabra: "+tamaño+" ")
}

function caracter() {
    let palabra=document.getElementById('palabra').value
    let tamaño=palabra.substring(0,1)
    alert("Primer caracter: "+tamaño+" ")
}
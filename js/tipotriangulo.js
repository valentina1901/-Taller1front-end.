

function tipotriangulo() {
    
    let a=document.getElementById('a').value
    parseFloat(a)
    let b=document.getElementById('b').value
    parseFloat(b)
    let c=document.getElementById('c').value
    parseFloat(c)

    //if a==b && b==c && a==c) lados iguales
    if (a==b && b==c && a==c){
        alert('El triangulo es equilatero')

    //(a==b || b==c || a==c) dos lados iguales
    } else if(a==b || b==c || a==c){ 
        alert('El triangulo es isosceles')

    //(a!=b && b!=c) ningun lado igual 
    } else if(a!=b && b!=c){
        alert('El triangulo es escaleno')

    } else { 
        alert(' Ingrese un numero valido ')

    }
}
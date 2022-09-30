

//boton comprobar para ejecutar el proceso
function Comprobar() {
    
    const nombre = document.getElementById('nombreins').value
    parseInt(nombre);

    const apellidos = document.getElementById('apellidoins').value
    parseInt(apellidos);

    const actividad = document.getElementById('activity').value
    parseInt(actividad);

    //las respues tienen que ser iguales
    //En este caso carolina forero analisis de proyecto es correcto

    if(nombre== 1 && apellidos==1 && actividad==1){
        alert("La respuesta es correcta")
        //nombre appelido y la actividad tienen que ser igual al valor que se le asigno en html 
        //En este caso Adriana Duarte diseño es correcto
    }else if(nombre== 2 && apellidos==2 && actividad==2){
        alert("La respuesta es correcta")
        //En este caso Yaneth Castillo ambiental es correcto
    }else if(nombre== 3 && apellidos==3 && actividad==3){
        alert("La respuesta es correcta")
        //En este caso Tatiana Cabrera front-end es correcto
    }else if(nombre== 4 && apellidos==4 && actividad==4){
        alert("La respuesta es correcta")
        //En este caso Jonathan Espitia PHP es correcto
    }else if(nombre== 5 && apellidos==5 && actividad==5){
        alert("La respuesta es correcta")
        //En este caso Luis Baquero C.Fisica es correcto
    }else if(nombre== 6 && apellidos==6 && actividad==6){
        alert("La respuesta es correcta")
        //En este caso Fernando Galindo BD es correcto
    }else if(nombre== 7 && apellidos==7 && actividad==7){
        alert("La respuesta es correcta")
        //si la respuesta no coincide con el nombre apellido o actividad se infomara incorrecto
    }else{
        alert("La respuesta es incorrecta")
    }
}


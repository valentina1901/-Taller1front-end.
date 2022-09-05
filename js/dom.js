
/*declarar variables pantalla (lineas)*/
const pantallalinearriba= document.getElementById('linearriba');
const pantallalineabajo= document.getElementById('lineabajo');

/* declarar variables para los botones */
const botones=  document.querySelectorAll('.numero');//seleccionar todos los numeros

/* declarar variables para los botones de funciones */
const botonfuncion= document.querySelectorAll('.funcion');//seleccionas todos los botones de funcion


//instanciar la pantalla
const Pantalla= new pantalla(pantallalinearriba, pantallalineabajo);


//realizar interaccion
//funcion flecha
botones.forEach(botone=>{
    ///los botones hagan click
    botone.addEventListener('click', () =>
    //cuando oprima un boton(numero) aparezca el numero que presiono
    Pantalla.digitarnumero(botone.innerHTML));
 });

 botonfuncion.forEach(botone =>{
    botone.addEventListener('click',() => Pantalla.determinar(botone.value))
 });


 
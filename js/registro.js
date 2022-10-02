const $formulario = document.querySelector("#formulario"),
$nombre = document.querySelector("#nombre"),
$correo = document.querySelector("#correo");
$formulario.onsubmit = evento => {
evento.preventDefault();
const nombre = $nombre.value,
    correo = $correo.value;
// Validar
if (nombre === "Luis" || nombre === "José") {
    alert("No pueden ser esos nombres");
    return;
}
if (correo.endsWith("@hotmail.com")) {
    alert("No puede ser de hotmail");
    return;
}

$formulario.submit();
};

function alert(){

    swal("Términos y condiciones", "Estos Términos del Servicio reflejan la forma de trabajar de Google como empresa , las leyes por las que nos regimos y determinados aspectos que siempre hemos creído que son ciertos . Por ello , estos Términos del Servicio ayudan a definir la relación que tiene Google contigo cuando interactúas con nuestros servicios . Por ejemplo , estos términos incluyen las siguientes secciones : Qué puedes esperar de nosotros , donde se describe cómo proporcionamos y desarrollamos nuestros servicios . Lo que esperamos de ti , donde se establecen ciertas reglas para utilizar nuestros servicios", {
        button: "Aceptar",
    } );
 
 }
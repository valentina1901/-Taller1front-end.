
    let C,K,F;
    function reseT()
    {
    C=0;K=0;F=0;
    }

    function calcular() {

    let opcion= document.getElementById("accion").value 
    if(opcion !='')
    {
        switch (opcion) {

            //celsius a fahrenheit
            case 'celsius a fahrenheit':

            C=document.getElementById('grados').value
            F=((C*9)/5)+32;

            alert("Grados en fahrenheit "+F+"")
            reseT()
            break;

            //faherenheit a celsius
            case 'fahrenheit a celsius':

            F=document.getElementById('grados').value
            C=((F-32)*5)/9;
            
            alert("Grados en celsius "+C+"")
            reseT()
            break;

            //fahrenheit a kelvin
            case 'fahrenheit a kelvin':

            F=document.getElementById('grados').value
            K=((F-32)*5/9)+273;
            
            alert("Grados en kelvin "+K+"")
            reseT()
            break;

            //celsius a kelvin
            case 'celsius a kelvin':

            C=document.getElementById('grados').value
            K=C+273;
                
            alert("Grados en kelvin "+K+"")
            reseT()
            break;

            //kelvin a fahrenheit
            case 'kelvin a fahrenheit':
            
            K=document.getElementById('grados').value
            F=((K-273)*5/9)+32;
                
            alert("Grados en fahrenheit "+F+"")
            reseT()
            break;

            //kelvin a celsius
            case 'kelvin a celsius':

            K=document.getElementById('grados').value
            C=K-273;
                
            alert("Grados en celsius "+C+"")
            reseT()
            break;

        }
  
        } else {alert("Error");}
        
    }
/*
function celsius() {

    let celsius=document.getElementById('grados').value
    let fahrenheit=((celsius*9)/5)+32

    alert("Grados en fahrenheit "+fahrenheit+"")
}

function fahrenheit() {

    let fahrenheit=document.getElementById('grados').value
    let celsius=((fahrenheit-32)*5)/9

    alert("Grados en celsius "+celsius+"")
}

function kelvin() {

    let fahrenheit=document.getElementById('grados').value
    let kelvin=((fahrenheit-32)*5/9)+273

    alert("Grados en kelvin "+kelvin+"")
}*/
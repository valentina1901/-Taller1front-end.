
    const Circulo=document.getElementById('calcularcir')
    const pi=3.1416

    let calcularcir = () => {
    const circuarea=document.getElementById('radiocirculo').value
    //area correspondiente al circulo 
    let res=pi*(circuarea*circuarea)
     swal('Area del circulo','' +res ,)
    }   
    Circulo.addEventListener('click',calcularcir)

    //perimetro correspondiente al circulo
    const Circulo2=document.getElementById('circal')
    let circal = () => {

    const pericir=document.getElementById('pericir').value
    let res=2*pi*(pericir*pericir)
     swal('Perimetro del circulo' +res ,)
    }

    Circulo2.addEventListener('click',circal)
    //area correspondiente al cuadrado
    const Cuadrado=document.getElementById('calcuadrado')

    let calcuadrado=()=>{
    const areacuadrado=document.getElementById('areacuadrado').value
    let res=areacuadrado*areacuadrado
     swal('Area del cuadrado','' +res ,)
    }

    Cuadrado.addEventListener('click',calcuadrado)
    //perimetro correspondiente al cuadrado
    const Cuadrado2=document.getElementById('calcuadrado2')

    let calcuadrado2=()=>{

    const cuadradoper=parseFloat(document.getElementById('cuadradoper').value)
    let res=(cuadradoper+cuadradoper+cuadradoper+cuadradoper)
     swal('Perimetro del cuadrado','' +res ,)
    }

    Cuadrado2.addEventListener('click',calcuadrado2)
    //area correspondiente al triangulo
    const Triangulo=document.getElementById('calculartri')

    let areatri=()=>{
    const triangulobase=parseFloat(document.getElementById('triangulobase').value)
    const trianguloaltura=parseFloat(document.getElementById('trianguloaltura').value)

    let res=(triangulobase*trianguloaltura/2)
     swal('Area del triangulo','' +res ,)
    }

    Triangulo.addEventListener('click',areatri)
    //perimetro correspondiente al triangulo
    const Triangulo2=document.getElementById('calculartri2')

    let calculartri2=()=>{

    const lado1=parseFloat(document.getElementById('lado1').value)
    const lado2=parseFloat(document.getElementById('lado2').value)
    const lado3=parseFloat(document.getElementById('lado3').value)
    let res=(lado1+lado2+lado3)
     swal('Perimetro del triangulo','' +res ,)
    }

    Triangulo2.addEventListener('click',calculartri2)
    //area correspondiente al rectangulo
    const Rectangulo=document.getElementById('rectangulocalculo')

    let arearectangulo=()=>{

    const rectangulobase=parseFloat(document.getElementById('rectangulobase').value)
    const rectanguloaltura=parseFloat(document.getElementById('rectanguloaltura').value)
    let res=(rectangulobase*rectanguloaltura)
     swal('Area del rectangulo','' +res ,)
    }

    Rectangulo.addEventListener('click',arearectangulo)

    //perimetro correspondiente al rectangulo
    const Rectangulo2=document.getElementById('rectangulocalculo2')

    let rectangulocalculo2=()=>{

    const rectangulobase=document.getElementById('rectangulobase').value
    const rectanguloaltura=document.getElementById('rectanguloaltura').value
    let res=2*(rectangulobase+rectanguloaltura)
     swal('Perimetro del rectangulo','' +res ,)
    }

    Rectangulo2.addEventListener('click',rectangulocalculo2)
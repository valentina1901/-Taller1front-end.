

/* Se crea una clase para manejar todo lo que tiene que ver con la panatalla de la calculadora  */

class pantalla{
/*metodo constructor para cuando se instancie la clase se puedan inatnciar valores */
  //tendra linea abajo y arriba  para poderlos actualizar
  constructor(pantallalinearriba, pantallalineabajo){
    //dos propiedades de la clase
    this.pantallalineabajo= pantallalineabajo;
    this.pantallalinearriba= pantallalinearriba;
    //instanciar caluladora
    this.calculadora=new Calculador();
    //utilizar string
    this.lineabajo='';
    this.linearriba= '';
    this.tipoperacion= undefined;

    this.signos={
        sumar:'+',
        restar:'-',
        multiplicar:'x',
        dividir:'/',
    }
  }

  /*agregar numeros */
  //con parametros
  digitarnumero(numero){
    //si ya hay un punto no se agregan mas puntos
    if(numero=== '.' && this.lineabajo.includes('.'))return
    //valor puesto sea igual al recibido
    //concatenar para que aparezcan los numeros unidos
    this.lineabajo= this.lineabajo.toString() + numero.toString();
    //impimir los valores
    this.imprimirnumero();
  }

  //poder imprimir los valores en la pantalla
  //sin parametros
  imprimirnumero(){
    //implementar el numero con textContent de html
    this.pantallalineabajo.textContent= this.lineabajo;
    this.pantallalinearriba.textContent= `${this.linearriba} ${this.signos[this.tipoperacion]}` || '' ;   
  }

  //sin parametros
  borraruno(){
    //recortar el ultimo numero(solo un numero)
    this.lineabajo= this.lineabajo.toString().slice(0,-1);
    this.imprimirnumero();
   }

  borrartodo(){
    //borrar todos los numeros
    this.lineabajo= this.linearriba.toString().slice(0,0);
    this.imprimirnumero();
   }

   calculo(){
    //cambiar de string y sea numero
    const linearriba= parseFloat(this.linearriba);
    const lineabajo= parseFloat(this.lineabajo);
    // si son is NaN no se hara la operacion 
    if (isNaN (lineabajo) || isNaN (linearriba))return
    //realizar calculos
    this.lineabajo= this.calculadora[this.tipoperacion](linearriba, lineabajo);
   }

   determinar(tipo){
    this.tipoperacion !== 'igual' && this.calculo();
    this.tipoperacion= tipo;
    this.linearriba= this.lineabajo || this.linearriba;
    this.lineabajo='';
    this.imprimirnumero();
   }
}
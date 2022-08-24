function capturarEntero(valor,tope) {
    do {
        let numero = window.prompt(valor, '0');

        if (numero>=1 && numero<=tope) {
            return parseInt(numero);
        }
    } while (true);
}


let frutas = 'Elija fruta preferida: (1) Naranja (2) Manzana (3) Banana (4) Cereza (5) Nada';
let bolsones = 'Elija bolson preferido: (1) Frutas (2) Verduras(3) Mixto (4) Eco (5) Nada';
let modoEnvio = "Elija (1) si se lo enviamos o (2) si retira por una sucursal"

let precioNaranja = 50;
let precioManzana = 60;
let precioBanana = 70;
let precioCereza = 80;

let precioBolsonFrutas = 200;
let precioBolsonVerduras = 60;
let precioBolsonMixto = 70;
let precioBolsonEco = 80;

let acumuladoCarrito = 0;
let precioEnvio =250;
let validaBolsones=false;
let validaSueltos=false;


switch (capturarEntero(frutas,5)) {
    case 1:
      console.log("El kilogramo de naranjas cuesta $"+precioNaranja);
      acumuladoCarrito= precioNaranja;
      break;
    case 2:
      console.log("El kilogramo de manzanas cuesta "+ precioManzana);
      acumuladoCarrito= precioManzana;
      break;
    case 3:
      console.log("El kilogramo de bananas cuesta "+ precioBanana);
      acumuladoCarrito= precioBanana;
      break;
    case 4:
      console.log("El kilogramo de cerezas cuesta "+ precioCereza);
      acumuladoCarrito= precioCereza;
      break;
      case 5:
        console.log("No has elegido sueltos ");
        validaSueltos=true;
        break;
    
  }

  switch (capturarEntero(bolsones,5)) {
    case 1:
      console.log('El bolson de frutas cuesta '+precioBolsonFrutas);
      acumuladoCarrito= precioBolsonFrutas+acumuladoCarrito;
      break;
    case 2:
      console.log('El bolson de verduras cuesta '+precioBolsonVerduras);
      acumuladoCarrito= precioBolsonVerduras+acumuladoCarrito;
      break;
    case 3:
      console.log('El bolson mixto cuesta '+precioBolsonMixto);
      acumuladoCarrito= precioBolsonMixto+acumuladoCarrito;
      break;
    case 4:
        console.log('El bolson eco cuesta '+precioBolsonEco);
        acumuladoCarrito= precioBolsonEco+acumuladoCarrito;
      break;

      case 5:
        console.log("No has elegido bolsones ");
        validaBolsones=true;
        break;
    
  }
if (validaBolsones == true && validaSueltos == true ){
    console.log('No has pedido nada, será la proxima!');


}else{
  switch (capturarEntero(modoEnvio,2)) {
    case 1:
      console.log('El envio a tu domicilio cuesta '+precioEnvio);
      acumuladoCarrito= precioEnvio+acumuladoCarrito;
      break;
    case 2:
      console.log('Podes retirar tu pedido por la sucursal mas cercana');
      
      break;
  }
  console.log("El monto final de tu pedido es " + acumuladoCarrito);
  console.log("Gracias por tu Compra!!" );
  }

  




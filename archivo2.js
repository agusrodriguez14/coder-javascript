
let artBolsonGrande = "el bolson Grande trae 8 kilos de fruta y verdura por $1500";
let artBolsonChico = "el bolson Chico trae 5 kilos de fruta y verdura por $750";
let precioGrande = 1500;
let precioChico = 750;


let artManzana = 30;
let artPera = 25;
let artPapa = 10;
let artCebolla = 12;
let artNaranja = 15;
let artAcelga = 16;

let frutasKilo = "Peras, Manzanas, Naranjas";
let totalEleccion = artManzana + artPera + artPapa + artCebolla + artNaranja + artAcelga ;
let verdurasKilo = "Papa, Cebolla, Acelga";


let precioEnvio = 500;
let tieneEnvio = "El precio del envio es " + precioEnvio;



let compraSemanal = "";
let compraQuincena = "si tu compra supera los $5000, tenes envio Gratis";



let eleccion = prompt("Elige 1 si preferis los bolsones de Verdura o 2 si preferis elegir sueltos.");
let movilidad = prompt("Te moves para buscar tus alimentos?");

let queEligio = leGustaElegir(eleccion);
let costoEnvio = envioDomicilio(movilidad);

console.log(queEligio);
console.log("el costo de envio es $ " +costoEnvio);


function cocinaMucho (tamaño,frecuencia){

    
    if (tamaño == "si" && frecuencia == "si"){
    return "llevate un Bolson Grande por " + precioGrande; 
    
    } else if (tamaño == "si" && frecuencia == "no")
    
        {  
            return "llevate 2 Bolsones Grandes por " + (2*precioGrande);    
    }

    else if (tamaño == "no" && frecuencia == "si")
    
        {return "llevate un Bolson Chico por " + precioChico;}

        else if (tamaño == "no" && frecuencia == "no")
    
        {return "llevate un Bolson Chico por " + (2*precioChico);}
    }



function leGustaElegir (gusto,volumen){
if (gusto = 1 ){
            
return "Te pueden Interesar: " + frutasKilo + " y " + verdurasKilo +" por $" + totalEleccion ; 

} else {
    let tamaño = prompt("Cocinas para tu familia?");
    let frecuencia = prompt("Organizas tus compras de forma semanal?");
   
    return cocinaMucho(tamaño,frecuencia);
 


}
}



function envioDomicilio (movilidadOk){          
    if (movilidadOk == "si" ){
    return 0;
    
    
    
    } else if (movilidadOk == "no" ){
    return precioEnvio;
    
    }
    
    
    }

   
   






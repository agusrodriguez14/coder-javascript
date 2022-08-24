let artManzana = 300;
let artPera = 250;
let artPapa = 100;
let artCebolla = 120;
let artNaranja = 150;
let artAcelga = 160;

let puntos = 130;

combos = presupuesto / precioComboCordobes;
restoPresupuesto = presupuesto % precioComboCordobes;

//cuantos combos puedo comprar
for(i=1; i<=combos ;i++)
{   cantComboCordobes++;

}
//si me sobra dinero voy por el fernet solo
while (restoPresupuesto>=precioFernet)
    {cantFernet++;
        restoPresupuesto=restoPresupuesto-precioFernet
} 
//y despues por la Coca
while (restoPresupuesto>=precioCoca)
{   cantCocas++;
    restoPresupuesto=restoPresupuesto-precioCoca

}

//Muestro lo que puedo comprar con mi presupuesto 
//y el dinero que me sobra

console.log("puedo comprar " +cantComboCordobes+" combos, "+cantCocas +" Cocas y " + cantFernet+ " Fernet" );
console.log("me sobran " + restoPresupuesto + " pesos");


//Estamos organizando una fiesta y tengo un presupuesto, 
//queremos saber combos de Fernet con Coca podemos comprar
//un comboCordobes = 2 Cocas + 1 Fernet
//Si sobra dinero del combo, se compra por separado.
let precioCoca = 5;
let precioFernet= 20;
let precioComboCordobes = (2*precioCoca) + precioFernet;
let cantCocas = 0;
let cantFernet = 0;
let cantComboCordobes = 0;
let presupuesto = prompt("Introduce un presupuesto:");

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


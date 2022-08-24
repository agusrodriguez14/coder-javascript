const productos = [
    {id: 1 ,nombre: "Naranja", precio: 50, categoria:"fruta,suelto"},
    {id: 2 ,nombre: "Manzana", precio: 60,categoria:"fruta,suelto"},
    {id: 3 ,nombre: "Banana", precio: 70,categoria:"fruta,suelto"},
    {id: 4 ,nombre: "Acelga", precio: 80,categoria:"verdura,suelto"},
    {id: 5 ,nombre: "Bolson de Frutas", precio: 100,categoria:"fruta,bolson"},
    {id: 6 ,nombre: "Bolson de Verduras", precio: 120,categoria:"verdura,bolson"},
    {id: 7 ,nombre: "Bolson Mixto", precio: 250,categoria:"fruta,verdura,bolson"},
    {id: 8 ,nombre: "Bolson Eco", precio: 300,categoria:"fruta,verdura,bolson"},
    {id: 9 ,nombre: "Rabanito", precio: 500,categoria:"verdura,suelto"},

  ];





function GeneraForm(){
    ////Crear el objeto ulario
   

       


        for (const producto of productos) {
            let contenedor1 = document.createElement("div");
            

            contenedor1.innerHTML = 
            `<p> ${producto.nombre}   Precio:${producto.precio} </p>`;

           document.body.appendChild(contenedor1)  ;
           
           

        }
}

function GeneraForm2(){



       


    let  listaFiltrada = productos.filter((producto)=>producto.categoria.includes("fruta"));


    for (const producto of listaFiltrada) {
      let contenedor1 = document.createElement("div");

      contenedor1.innerHTML = 
      `<p> ${producto.nombre}   Precio:${producto.precio} </p>`;

     document.body.appendChild(contenedor1)  ;
           

        }
}

function GeneraForm3(){



       


    let  listaFiltrada = productos.filter((producto)=>producto.categoria.includes("verdura"));


    for (const producto of listaFiltrada) {
      let contenedor1 = document.createElement("div");

      contenedor1.innerHTML = 
      `<p> ${producto.nombre}   Precio:${producto.precio} </p>`;

     document.body.appendChild(contenedor1)  ;
           

        }
}

function GeneraForm4(){



       


    let  listaFiltrada = productos.filter((producto)=>producto.categoria.includes("bolson"));


    for (const producto of listaFiltrada) {
      let contenedor1 = document.createElement("div");

      contenedor1.innerHTML = 
      `<p> ${producto.nombre}   Precio:${producto.precio} </p>`;

     document.body.appendChild(contenedor1)  ;
           

        }
}
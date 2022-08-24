

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
                 /* function filtrarVerdura() {
                  
                    let  listaFiltrada = productos.filter((producto)=>producto.categoria.includes("fruta"));


                    for (const producto2 of listaFiltrada) {
                      let contenedor2 = document.createElement("div");

                      contenedor2.innerHTML = 
                      `<p> ${producto2.nombre}   Precio:${producto2.precio} </p>`;

                     document.body.appendChild(contenedor2)  ;
                     
                     

                  }
                }

*/
                  let boton = document.createElement("input");
                  boton.setAttribute('type', "button");
                  boton.setAttribute('value', "Enviar");
                  
                  boton.addEventListener("click",function(){
                       


                  });




                
                   


                  

                  
                  

                  

                  for (const producto of productos) {
                      let contenedor1 = document.createElement("div");
                      contenedor1.setAttribute('class', "div1")

                      contenedor1.innerHTML = 
                      `<p> ${producto.nombre}   Precio:${producto.precio} </p>`;

                     document.body.appendChild(contenedor1)  ;
                     
                     

                  }
                  document.querySelector(".hide").addEventListener("click", () => {
                    div1.classList.add("div1_hide");
                  });
                  
                  document.querySelector(".show").addEventListener("click", () => {
                    div1.classList.remove("div1_hide");
                  });


                  document.body.appendChild(boton)  ;
/* let nuevaLista = new Array ();
let listaProductos = new Array ();
let carrito =[];
let acumulado = 0 ;

*/













  /*listaFiltrada = productos.filter((producto)=>producto.categoria.includes("verdura"));


            
             
             
            
      





let contadorCarrito = 0;
const carrito = [];

const productoCatalogoHTML = (producto) => {
  return `
    <div class="col">
      <div class="card">
        <img
          src="https://loremflickr.com/100/100/${producto.nombre}"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">Precio: ${producto.precio}</p>
          <button id="btn-catalogo-${producto.id}" class="btn btn-success">Agregar</button>
        </div>
      </div>
    </div>`;
};






const productoCarritoHTML = (producto) => {
  return `
    <div class="col">
      <div class="card">
        <img
          src="https://loremflickr.com/100/100/${producto.nombre}"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <button id="btn-carrito-${producto.idCompra}" class="btn btn-danger">Quitar</button>
        </div>
      </div>
    </div>`;
};

const mostrarCatalogoFiltrado = () => {
  const filtrarVerdura = document.getElementById("filtro-verdura");
  let catalogoHTML = "";

  for (const producto of listaFiltrada) {
    catalogoHTML += productoCatalogoHTML(producto);
  }

  catalogoNodo.innerHTML = catalogoHTML;
  botonesCatalogo();
 

};

const mostrarCatalogo = () => {
  const catalogoNodo = document.getElementById("catalogo");
  let catalogoHTML = "";

  for (const producto of productos) {
    catalogoHTML += productoCatalogoHTML(producto);
  }

  catalogoNodo.innerHTML = catalogoHTML;
  botonesCatalogo();
 

};
const mostrarCarrito = () => {
  const carritoNodo = document.getElementById("carrito");
  const precioNodo = document.getElementById("precioTotal");

  let carritoHTML = "";
  let precio = 0;
  for (const producto of carrito) {
    carritoHTML += productoCarritoHTML(producto);
    precio += producto.precio;
  }

  precioNodo.innerHTML = precio;
  carritoNodo.innerHTML = carritoHTML;
  botonesCarrito();
};

const botonesCatalogo = () => {
  for (const producto of productos) {
    const botonId = `btn-catalogo-${producto.id}`;
    const botonNodo = document.getElementById(botonId);

    botonNodo.addEventListener("click", () => {
      const productoCarrito = {
        nombre: producto.nombre,
        idCompra: contadorCarrito,
        precio: producto.precio,
      };

      contadorCarrito += 1;
      carrito.push(productoCarrito);
      mostrarCarrito();
    });
  }
};

const botonesCarrito = () => {
  for (const producto of carrito) {
    const botonId = `btn-carrito-${producto.idCompra}`;
    const botonNodo = document.getElementById(botonId);

    botonNodo.addEventListener("click", () => {
      const index = carrito.findIndex((p) => p.idCompra == producto.idCompra);
      carrito.splice(index, 1);
      mostrarCarrito();
    });
  }
};

mostrarCatalogo();

filtrarVerdura.addEventListener("click", () => {
  mostrarCatalogoFiltrado();
});

console.log(productoCatalogoHTML(productos[0]));

*/


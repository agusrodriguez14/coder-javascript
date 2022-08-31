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

  const {id,nombre,precio,categoria} = productos;

 

  let contadorCarrito = 0;
  const carrito = [];




const productoCatalogoHTML = (producto) => {
    console.log("productoCatalogoHTML", producto)

    return `
            <div>
            <h5 >${producto.nombre}</h5>
            <p>Precio: ${producto.precio}</p>
            <button id="btn-catalogo-${producto.id}" >Agregar</button>
            </div>`;
  };
  const productoCarritoHTML = (producto) => {


    return `
            <div >
            <h5 >${producto.nombre}  x ${producto.contador}</h5>
            
            
            <button id="btn-carrito-${producto.idCompra}">Quitar Unidad</button>
            </div>`;
  };
 
        const varVerdura = "verdura";
        const varBolson = "bolson";
        const varFruta = "fruta";

        //mostrar listado filtrado
        function mostrarListas(tipo) 
        {
        const catalogo = document.getElementById("catalogo");
        catalogo.style.display = "block"
        let  listaFiltrada = productos.filter((producto)=>producto.categoria.includes(tipo));
        const catalogoNodo = document.getElementById("catalogo");
        let catalogoHTML = "";
      
        for (const producto of listaFiltrada)
        {catalogoHTML += productoCatalogoHTML(producto);}
        
        catalogoNodo.innerHTML = catalogoHTML;
        return botonesCatalogo(listaFiltrada);
        }

        const mostrarFrutas = () => {
        mostrarListas(varFruta);
        };
        const mostrarVerduras = () => {
        mostrarListas(varVerdura);
        }
        const mostrarBolsones = () => {
        mostrarListas(varBolson);
        }


const mostrarTodo = () => {

        //encapsular en otra func para no repetir codigo. 
        const catalogo = document.getElementById("catalogo");
        catalogo.style.display = "block"
        const catalogoNodo = document.getElementById("catalogo");
        let catalogoHTML = "";
      
        for (const producto of productos) {
          catalogoHTML += productoCatalogoHTML(producto);
        }
      
        catalogoNodo.innerHTML = catalogoHTML;
        botonesCatalogo(productos);
   

}   
                        

    let listadogeneral = document.getElementById("btnGeneral");
    listadogeneral.addEventListener("click", mostrarTodo);

    let listadoVerduras = document.getElementById("btnVerduras");
    listadoVerduras.addEventListener("click", mostrarVerduras);

    let listadoBolsones = document.getElementById("btnBolsones");
    listadoBolsones.addEventListener("click", mostrarBolsones);

    let listadoFrutas = document.getElementById("btnFrutas");
    listadoFrutas.addEventListener("click", mostrarFrutas); 

    let listadoCarrito = document.getElementById("btnCarrito");
    listadoCarrito.addEventListener("click", mostrarCarrito);


//////

function mostrarCarrito () {
    const catalogo = document.getElementById("catalogo");
    catalogo.style.display = "none"
    const carritoNodo = document.getElementById("carrito");
    const precioNodo = document.getElementById("precioTotal");
  
    let carritoHTML = "";
    let precio = 0;
    for (const producto of carrito) {
      carritoHTML += productoCarritoHTML(producto);
      precio += (producto.precio) * (producto.contador);
    }
  
    precioNodo.innerHTML = precio;
    carritoNodo.innerHTML = carritoHTML;
    botonesCarrito();
   }
 //////

  function botonesCatalogo(listaFiltradaDeProductos)  {

    for (const producto of listaFiltradaDeProductos) {
     
      const idBoton = producto.id;
      const botonId = `btn-catalogo-${producto.id}`;
      const botonNodo = document.getElementById(botonId);

  
      botonNodo.addEventListener("click", () => {
        const resultado = carrito.find(producto2 => producto2.id === idBoton);
        
        
        
        if (resultado == undefined){
        
          const productoCarrito = {
            id:producto.id,
            nombre: producto.nombre,
            idCompra: contadorCarrito,
            precio: producto.precio,
            contador:1,   
          };    
          contadorCarrito += 1;
          carrito.push(productoCarrito);
        
        }else{resultado.contador++;}
    });
    };
      

  }


      const botonesCarrito = () => {
      for (const producto of carrito) {
      const botonId = `btn-carrito-${producto.idCompra}`;
      const botonNodo = document.getElementById(botonId);
  
      botonNodo.addEventListener("click", () => {
      const index = carrito.findIndex((p) => p.idCompra == producto.idCompra);

        producto.contador>1 ? 
        (producto.contador--, mostrarCarrito()) 
        : 
        (carrito.splice(index, 1),mostrarCarrito());



      });
    }
  };

 

//todos los productos
const productos = [
    {id: 1 ,nombre: "Naranja", precio: 50, categoria:"fruta"},
    {id: 2 ,nombre: "Manzana", precio: 60,categoria:"fruta"},
    {id: 3 ,nombre: "Banana", precio: 70,categoria:"fruta"},
    {id: 4 ,nombre: "Acelga", precio: 80,categoria:"verdura"},
    {id: 5 ,nombre: "Bolson de Frutas", precio: 100,categoria:"fruta,bolson"},
    {id: 6 ,nombre: "Bolson de Verduras", precio: 120,categoria:"verdura,bolson"},
    {id: 7 ,nombre: "Bolson Mixto", precio: 250,categoria:"fruta,verdura,bolson"},
    {id: 8 ,nombre: "Bolson Eco", precio: 300,categoria:"fruta,verdura,bolson"},
    {id: 9 ,nombre: "Rabanito", precio: 500,categoria:"verdura,suelto"},

  ];

  //dom
  const formulario = document.getElementById("form");
  const label1 = document.getElementById("labelCarrito");
  const label2 = document.getElementById("labelCarrito2");
  const boton1 = document.getElementById("btnEnviar");
  const divCarrito = document.getElementById("carrito");
  const labelPrecioTotal = document.getElementById("precioTotal");
  const labelCatalogo = document.getElementById("labelCatalogo");
  //visibilidad 
  formulario.style.display = "none";
  label1.style.display = "none";
  label2.style.display = "none";
  boton1.style.display = "none";
  labelPrecioTotal.style.display = "none";
  divCarrito.style.display = "none";


//seteo de variables
let prodCarrito = 0;
let contadorCarrito = 0;
const carrito = [];

//toast

  const Toast = {
    init() {
      this.hideTimeout = null;
  
      this.el = document.createElement("div");
      this.el.className = "toast";
      document.body.appendChild(this.el);
    },
  
    show(message, state) {
      clearTimeout(this.hideTimeout);
  
      this.el.textContent = message;
      this.el.className = "toast toast--visible";
  
      if (state) {
        this.el.classList.add(`toast--${state}`);
      }
  
      this.hideTimeout = setTimeout(() => {
        this.el.classList.remove("toast--visible");
      }, 1000);
    }
  };
  
  document.addEventListener("DOMContentLoaded", () => Toast.init());

//catalogo de productos  
const productoCatalogoHTML = (producto) => {
   

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
        { labelCatalogo.style.display = "inline";
          formulario.style.display = "none";
          label1.style.display = "none";
          label2.style.display = "none";
          boton1.style.display = "none";
          labelPrecioTotal.style.display = "none";
          divCarrito.style.display = "none";
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
 //funciones del menu superior                       

    let listadogeneral = document.getElementById("btnGeneral");
    listadogeneral.addEventListener("click", mostrarTodo);
   
    let listadoVerduras = document.getElementById("btnVerduras");
    listadoVerduras.addEventListener("click", mostrarVerduras);

    let listadoBolsones = document.getElementById("btnBolsones");
    listadoBolsones.addEventListener("click", mostrarBolsones);

    let listadoFrutas = document.getElementById("btnFrutas");
    listadoFrutas.addEventListener("click", mostrarFrutas); 

    let listadoCarrito = document.getElementById("btnCarrito");
    listadoCarrito.addEventListener("click", 
      mostrarCarrito
      
      
      );


//CARRITO

function mostrarCarrito () {
    const catalogo = document.getElementById("catalogo");
    const carritoNodo = document.getElementById("carrito");
    const precioNodo = document.getElementById("precioTotal");
    labelCatalogo.style.display = "none";
    catalogo.style.display = "none";
    label1.style.display = "inline";
    label2.style.display = "inline";
    boton1.style.display = "inline";
    labelPrecioTotal.style.display = "inline";
    divCarrito.style.display = "inline";
    
  
    let carritoHTML = "";
    let precio = 0;
    for (const producto of carrito) {
      carritoHTML += productoCarritoHTML(producto);
      prodCarrito += productoCarritoHTML(producto);
      precio += (producto.precio) * (producto.contador);
    }
  
    precioNodo.innerHTML = precio;
    carritoNodo.innerHTML = carritoHTML;
    botonesCarrito();
   }

 //BOTONES CATALOGO

  function botonesCatalogo(listaFiltradaDeProductos)  {

    
    for (const producto of listaFiltradaDeProductos) {
     
      const idBoton = producto.id;
      const botonId = `btn-catalogo-${producto.id}`;
      const botonNodo = document.getElementById(botonId);

  
      botonNodo.addEventListener("click", () => {
        const resultado = carrito.find(producto2 => producto2.id === idBoton);
        Toast.show("Producto agregado","success");
        
        
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

//BOTONES CARRITO
      const botonesCarrito = () => {
      for (const producto of carrito) {
      const botonId = `btn-carrito-${producto.idCompra}`;
      const botonNodo = document.getElementById(botonId);
  
      botonNodo.addEventListener("click", () => {
      const index = carrito.findIndex((p) => p.idCompra == producto.idCompra);
      Toast.show("Producto eliminado","error");
        producto.contador>1 ? 
        (producto.contador--, mostrarCarrito()) 
        : 
        (carrito.splice(index, 1),mostrarCarrito());



      });
    }
  };

  //API PARA ENVIAR MAILS A LOS CLIENTES

  function enviarMail (message,cliente,mail) {
    emailjs.send("agus_ok","template_vjnpfuk",{
      from_name: "Verduleria",
      to_name: cliente,
      message: `Compraste ${message}`,
      email_to: mail,
      }) 
      
      
      
        .then(function(response) {

        console.log('SUCCESS!', response.status, response.text);
        Toast.show("Pedido Enviado","success");
     }, function(error) {
        console.log('FAILED...', error);
        Toast.show("Pedido NO Enviado, Por favor revisa tu carrito","error");
     })

      
    
    
    
    }




const botonEnviar = document.getElementById("btnEnviar");
//CHEQUEO SI EL CARRITO NO ESTA VACIO
botonEnviar.addEventListener("click",()=>

{ carrito.length >0 ? (formulario.style.display = "inline") : (Toast.show("Pedido NO Enviado, Por favor revisa tu carrito","error"))
  
  
  });
  
const enviarFormulario = document.getElementById("enviarFormulario");

enviarFormulario.addEventListener("click",()=>{


//MENSAJE QUE VA EN EL MAIL
let carritoMensaje = "";
  let precioFinal = 0;
  for (const producto of carrito) 
  {
  carritoMensaje += producto.contador;
  carritoMensaje += " x " ;  
  carritoMensaje += producto.nombre ;
  carritoMensaje += " $ " ;
  carritoMensaje += producto.precio ;
  carritoMensaje += '\n';
  precioFinal += (producto.precio) * (producto.contador);


  
  }
  carritoMensaje = carritoMensaje + "Monto a abonar: $" + precioFinal;
  
  const nombreCliente = document.getElementById("to_name").value;
  const mailCliente = document.getElementById("email_to").value;

 
  enviarMail(carritoMensaje,nombreCliente,mailCliente,precioFinal);



}

)  ;  




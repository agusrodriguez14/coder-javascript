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


  









const productoCatalogoHTML = (producto) => {
    return `
            <div>
            <h5 >${producto.nombre}</h5>
            <p>Precio: ${producto.precio}</p>
            <button id="btn-catalogo-${producto.id}" >Agregar</button>
            </div>`;
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


  

  let listadoFrutas = document.getElementById("btnFrutas");
  listadoFrutas.addEventListener("click", generaForm); 

function generaForm(){
 
        let  listaFiltrada = productos.filter((producto)=>producto.categoria.includes("fruta"));
        const catalogoNodo = document.getElementById("catalogo");
        let catalogoHTML = "";
      
        for (const producto of listaFiltrada) {
          catalogoHTML += productoCatalogoHTML(producto);
        }
      
        catalogoNodo.innerHTML = catalogoHTML;
        botonesCatalogo();
      };


      let listadoVerduras = document.getElementById("btnVerduras");
      listadoVerduras.addEventListener("click", GeneraForm2);

function GeneraForm2(){
        
        let  listaFiltrada = productos.filter((producto)=>producto.categoria.includes("verdura"));
        
        const catalogoNodo = document.getElementById("catalogo");
        let catalogoHTML = "";
      
        for (const producto of listaFiltrada) {
          catalogoHTML += productoCatalogoHTML(producto);
        }
      
        catalogoNodo.innerHTML = catalogoHTML;
        botonesCatalogo();

    }

    let listadoBolsones = document.getElementById("btnBolsones");
    listadoBolsones.addEventListener("click", GeneraForm3);

function GeneraForm3(){
        
    let  listaFiltrada = productos.filter((producto)=>producto.categoria.includes("bolson"));
    
    const catalogoNodo = document.getElementById("catalogo");
    let catalogoHTML = "";
  
    for (const producto of listaFiltrada) {
      catalogoHTML += productoCatalogoHTML(producto);
    }
  
    catalogoNodo.innerHTML = catalogoHTML;
    botonesCatalogo();

}

let listadogeneral = document.getElementById("btnGeneral");
listadogeneral.addEventListener("click", GeneraForm4);


function GeneraForm4(){
        
   
        const catalogoNodo = document.getElementById("catalogo");
        let catalogoHTML = "";
      
        for (const producto of productos) {
          catalogoHTML += productoCatalogoHTML(producto);
        }
      
        catalogoNodo.innerHTML = catalogoHTML;
        botonesCatalogo();
   

}
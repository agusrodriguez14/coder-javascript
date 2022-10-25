import Button from "./Button";
import CartWidget from "./CartWidget";
import "./navbar.css";


function NavBar(){
return(
<div className="nav">
<h3>MI VERDULERIA ONLINE</h3>
<Button text="Home"></Button>
<Button text="Nosotros"></Button>
<Button text="Productos"></Button>
<Button text="Contacto"></Button>
<CartWidget></CartWidget>

</div>
);
}


export default NavBar;
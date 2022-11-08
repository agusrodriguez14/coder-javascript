/*import Button from "./Button";
import CartWidget from "./CartWidget";
import "./navbar.css";


function NavBar(){
return(
<div className="nav">
<h3>MI VERDULERIA ONLINE</h3>
<Button text="Home"></Button>
<Button text="Frutas"></Button>
<Button text="Verduras"></Button>
<Button text="Todos los Productos"></Button>
<CartWidget></CartWidget>

</div>
);
}


export default NavBar;*/

import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import "./navbar.css";

function NavBar() {
  return (
    <nav className="nav-menu">
      <Link to="/">
        <h3>Mi Verduleria Online</h3>
      </Link>

      <Link to="/category/verdura">Verduras</Link>
      <Link to="/category/fruta">Frutas</Link>

      <CartWidget />
    </nav>
  );
}

export default NavBar;

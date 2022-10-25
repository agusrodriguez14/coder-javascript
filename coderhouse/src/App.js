import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListCointainer';


function App() {
  const title= "Bienvenidos a mi Clase de JSX"

function handleClick(){
alert("clickeaste")
}

let user = {name: "agustin", edad: "33"};
const misEstilos ={
color: "#cc56ee"


}
  return (
<div>
<nav>
 
  </nav>
    <div className="App">
      
      <header className="App-header">
      <NavBar></NavBar>
      </header>
      <ItemListContainer></ItemListContainer>
    </div>
    </div>
  );
}

export default App;

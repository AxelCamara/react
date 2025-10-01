import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css'

function App() {
  const saludo = "Bienvenidos"
  return (
    <div className="app">
      <NavBar /> 
      <ItemListContainer greeting={"Bienvenido a mi Ecommerce"}/>
      <h1>{saludo}</h1> 
      
      
    </div>
  )
}

export default App

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "./Components/Header"
import Formulario from "./Components/Formulario"
import Footer from "./Components/Footer"
import Lista from "./Components/Lista"


function App() {
  return (
    <div >
      <div>
        <Header/>
        <Formulario/>
        <Lista></Lista>
      </div>
      <div>
        <Footer
				  classN={"bg-dark text-white text-center p-3"}
				  text={"Noviembre 2023. Todos los derechos reservados."}
			  ></Footer>
      </div>
    </div>
  )

}
export default App

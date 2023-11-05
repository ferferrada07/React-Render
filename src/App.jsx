import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "./Components/Header"
import Formulario from "./Components/Formulario"
import Footer from "./Components/Footer"
import Lista from "./Components/Lista"
import { useState } from "react"
import { BaseColaboradores } from "./BaseColaboradores"


function App() {

 const [colaboradores, setColaboradores] = useState(BaseColaboradores)



  return (
    <div >
      <div>
        <Header/>
        <Formulario setColaboradores={setColaboradores} colaboradores={colaboradores}/>
        <Lista colaboradores={colaboradores}></Lista>
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

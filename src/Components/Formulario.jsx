import "bootstrap/dist/css/bootstrap.min.css"
import React, {Fragment, useState}from "react";


const Formulario = () => {
    
    const[datos, setDatos] =useState({
        Nombre:'',
        Correo:'',
        Edad:'',
        Cargo:'',
        Telefono:''
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setDatos ({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos =(event) => {
        event.preventDefault();
        console.log(datos.Nombre+''+datos.Correo+''+datos.Edad+''+datos.Cargo+''+datos.Telefono)
    }

    return (
        <Fragment >
            <form className="Formulario" onSubmit={enviarDatos}>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <input 
                        type="text"
                        placeholder="Nombre del Colaborador"
                        className="form-control"
                        name="Nombre"
                        onChange={handleInputChange}
                         />
                    </div>
                    <div className="form-group col-md-12">
                        <input 
                        type="email"
                        placeholder="Correo Electronico"
                        className="form-control"
                        name="Correo" 
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group col-md-12">
                        <input 
                        type="number"
                        placeholder="Edad del Trabajador"
                        className="form-control"
                        name="Edad" 
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group col-md-12">
                        <input 
                        type="text"
                        placeholder="Cargo del Colaborador"
                        className="form-control"
                        name="Cargo" 
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group col-md-12">
                        <input 
                        type="number"
                        placeholder="Telefono del Colaborador"
                        className="form-control"
                        name="Telefono" 
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group col-md-12">
                        <button 
                            type="submit" 
                            className="form-control btn btn-success"
                            >Agregar Colaborador
                        </button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default Formulario;
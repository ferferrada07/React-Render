import "bootstrap/dist/css/bootstrap.min.css"
import React, {Fragment, useState, useEffect}from "react";
import {Form, useForm} from "react-hook-form"
import Swal from "sweetalert2"


  


const Formulario = ({setColaboradores,colaboradores}) => {
    console.log(colaboradores,"prueba colaboradores")
   
    // const [idActual,setIdActual] = useState () 

    // useEffect(() => { 
        
    //   setIdActual(colaboradores.length + 1);  
    //    }, [colaboradores]);

      const[datos, setDatos] =useState({
        id:'',
        nombre:'',
        correo:'',
        edad:'',
        cargo:'',
        telefono:''
    });

    const handleInputChange = (event) => {
        
    
        setDatos ({
            ...datos,
            [event.target.name] : event.target.value, 
            id: colaboradores.length + 1
        })
    };

    const handleMit = (e) => {
        e.preventDefault();
        
        setColaboradores([...colaboradores,datos]);
        insertar();
        

    }


    const {register, formState:{errors},reset}= useForm ();
    
    

    function insertar (data) {
        Swal.fire({
        //   position: 'top-center',
          icon: 'success',
          title: "Formulario Exitoso",
          showConfirmButton: false,
          timer: 1500

        });
    

       
        
        reset();

      
    };

   

    return (
        <Fragment >
            <form className="Formulario" onSubmit={(e) => handleMit(e)} >
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <input 
                        type="text"
                        placeholder="Nombre del Colaborador"
                        className="form-control"
                        name="nombre"
                        onChange={(e) => handleInputChange(e)}
                        // {...register("nombre",{required:true})}
                        />
                        {errors.nombre?.type ==="required" && (<div style={{backgroundColor:"red"}}>Ingresa Nombre</div>)}
                    </div>
                    <div className="form-group col-md-12">
                        <input 
                        type="email"
                        placeholder="Correo Electronico"
                        className="form-control"
                        name="correo" 
                        onChange={(e) => handleInputChange(e)}
                        // {...register("correo",{required:true, pattern:/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/})}
                        />
                        {errors.correo?.type ==="required" && (<div style={{backgroundColor:"red"}}>Ingresa tu correo</div>)}
                        {errors.correo?.type ==="pattern" && (<div style={{backgroundColor:"red"}}>Correo no valido</div>)}
                    </div>
                    <div className="form-group col-md-12">
                        <input 
                        type="number"
                        placeholder="Edad del Trabajador"
                        className="form-control"
                        name="edad" 
                        onChange={(e) => handleInputChange(e)}
                        // {...register("edad",{required:true, pattern:"\d*"})}
                        />
                        {errors.edad?.type ==="required" && (<div style={{backgroundColor:"red"}}>Ingresa Edad</div>)}
                    </div>
                    <div className="form-group col-md-12">
                        <input 
                        type="text"
                        placeholder="Cargo del Colaborador"
                        className="form-control"
                        name="cargo" 
                        onChange={(e) => handleInputChange(e)}
                        // {...register("cargo",{required:true,})}
                        />
                        {errors.cargo?.type ==="required" && (<div style={{backgroundColor:"red"}}>Ingresa Cargo</div>)}
                    </div>
                    <div className="form-group col-md-12">
                        <input 
                        type="number"
                        placeholder="Telefono del Colaborador"
                        className="form-control"
                        name="telefono" 
                        onChange={(e) => handleInputChange(e)}
                        // {...register("telefono",{required:true, valueAsNumber:true})}
                        />
                        {errors.telefono?.type ==="required" && (<div style={{backgroundColor:"red"}}>Ingresa Telefono</div>)}
                    </div>
                    <div className="form-group col-md-12">
                        {/* <button 
                            onSubmit={(e) => handleMit(e)}
                             
                            className="form-control btn btn-success"
                            >Agregar Colaborador
                        </button> */}
                        <button 
                            // onClick={(e) => handleMit(e)}
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
import { Layout } from "../../components/Layout";
import { Link } from "react-router-dom";
import { Seleccionalumno } from "../../components/SeleccionAlumno";
const Maestro = () => {
    return (
        <div className="contenedor">
            <div className="seleccion_alumno">
               <Seleccionalumno/>    
               
            </div>      
        </div>

    );
}

export default Maestro;
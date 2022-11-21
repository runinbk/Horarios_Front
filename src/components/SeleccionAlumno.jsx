import { Link } from "react-router-dom";
export const Seleccionalumno = () => {
    return (
           <>    
                <h1>seleccione una categoria</h1> 
                 <button><Link className="seleccion_alumno_link" to="/nuevo"><b>alumno nuevo</b></Link></button>
                 <button><Link className="seleccion_alumno_link" to="/antiguo"><b>alumno antiguo</b></Link></button>        
           </>
    );
}
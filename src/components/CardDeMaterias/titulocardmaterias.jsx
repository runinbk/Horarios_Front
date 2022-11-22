import { Link } from "react-router-dom";
export const Titulocardmaterias=({categoria,subtitulo,boton,direccion})=>{
    return (
        <div className="contenedor_titulo_cardmaterias">
           <div className="titulo_cardmaterias"><h1>{categoria}</h1></div>
           <div className="boton_subtitulo">
              <div className="subtitulo_cardmaterias">
              <h2>{subtitulo}</h2>
              </div>
              <div className="boton_cardmaterias">
              <button><Link to={direccion} className="link_boton_cardmaterias"><b>{boton}</b></Link></button>
              </div>
           </div>
           
            
            
           
           
      </div> 
    );
}
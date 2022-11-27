import { Titulocardmaterias } from "../../components/CardDeMaterias/titulocardmaterias";
import { Contenedorcardgrupos } from "../../components/cardgrupos/contenedorcardgrupos";

export const Materiasinscribir=()=>{
    return(
       <div>
            <Titulocardmaterias 
              categoria="Nuevo ingreso" 
              subtitulo="Selecciones los grupos a inscribir" 
              boton="FINALIZAR" 
              direccion=""/>
            <Contenedorcardgrupos/>

       </div>

    );
}
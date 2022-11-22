import { Titulocardmaterias } from "../../components/CardDeMaterias/titulocardmaterias";

export const Materiasinscribir=()=>{
    return(
        <div>
            <Titulocardmaterias 
              categoria="Nuevo ingreso" 
              subtitulo="Selecciones los grupos a inscribir" 
              boton="FINALIZAR" 
              direccion=""/>
        </div>
    );
}
import { Cardmaterias } from "./cardmaterias";


export const Contenedorcardmaterias=({lista})=>{
    return(
        <div className="contenedor_cardmaterias">
               { lista.map(card=>(
                 <div className="cardmaterias" key={card.id}>
                    <Cardmaterias 
                      materia={card.materia} 
                      sigla={card.sigla} 
                      grupos_asignados={card.grupos_asignados} 
                      seleccion={card.seleccion}
                    />
                  </div>  
               ))

               }
                
        </div>
    );
}
import { Cardmaterias } from "./cardmaterias";


export const Contenedorcardmaterias=({lista})=>{
    return(
        <div className="contenedor_cardmaterias">
               { lista.map(card=>(
                 <div className="cardmaterias" key={card.id}>
<<<<<<< HEAD
                    <Cardmaterias 
                      id={card.id}
=======
                    <Cardmaterias
                      id={card.id} 
>>>>>>> 511f3b825f594e2bec905b56966f6f71c098b08d
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
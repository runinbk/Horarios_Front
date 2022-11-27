import { Cardsemestres } from "./cardsemestres";



export const Contenedorcardsemestres=({lista})=>{
    return(
        <div className="contenedor_cardmaterias">
               { lista.map(card=>(
                 <div className="cardmaterias" key={card.id}>
<<<<<<< HEAD
                    <Cardsemestres 
=======
                    <Cardsemestres
>>>>>>> 511f3b825f594e2bec905b56966f6f71c098b08d
                      id={card.id}
                      semestre={card.semestre} 
                      materia1={card.materia1} 
                      materia2={card.materia2}
                      materia3={card.materia3}
                      materia4={card.materia4}
                      materia5={card.materia5}
                      materia6={card.materia6}
                      materia7={card.materia7}
                      materia8={card.materia8}
                      grupos_asignados={card.grupos_asignados} 
                      seleccion={card.seleccion}
                    />
                  </div>  
               ))

               }
                
        </div>
    );
}
import React from "react";
import { Cardfilasgrupos } from "./cardfilasgrupos";




//var newtargeta=targeta.filter(function(el){
//     return(el.select===true);
//});

export const Cardgrupos=({grupos,materia})=>{
     

    return(
        
            
            <>
               <h1>{materia}</h1>
               <table className="contenedor_card" > 
                    <thead><tr className="cabeza_lista"><th>Grupo</th>
                    <th>Semestre</th>
                    <th>Docente</th>
                    <th>Dia</th>
                    <th>Dia</th>
                    <th>Dia</th>
                    <th>seleccion</th></tr></thead>
                    <tbody>
                    {grupos.map(target=>(
                       <tr className="cabeza_lista" key={target.id}>
                          <Cardfilasgrupos id={target.id} grupo={target.grupo} semestre={target.semestre} docente={target.docente} dia1={target.dia1} dia2={target.dia2} dia3={target.dia3}/>
                       </tr>
                    ))

                    }
                    </tbody>

                       
                    
               </table>
               
            </>

            

          
           
            
        
    );
}
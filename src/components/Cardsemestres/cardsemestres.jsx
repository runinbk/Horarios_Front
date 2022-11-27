import { useState } from "react";

export const Cardsemestres=({id,semestre,materia1,materia2,materia3,materia4,materia5,materia6,materia7,materia8,seleccion})=>{
    const [estado,setestado]= useState(seleccion)
    const handlechange=()=>{
     if(estado===false){
         setestado(true);
     }else{
         setestado(false);
     }
     console.log(estado);
     console.log(id);
    }
    return(
        <>
           <h1>{semestre}</h1>
           <h3>{materia1}</h3>
           <h3>{materia2}</h3>
           <h3>{materia3}</h3>
           <h3>{materia4}</h3>
           <h3>{materia5}</h3>
           <h3>{materia6}</h3>
           <h3>{materia7}</h3>
           <h3>{materia8}</h3>
           <input type="checkbox" name="id" onClick={handlechange}></input>
        </>
    );

}
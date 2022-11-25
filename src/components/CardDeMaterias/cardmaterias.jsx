import { useState } from "react";

export const Cardmaterias=({id,materia,sigla,grupos_asignados,seleccion})=>{
   const[estado,setestado]=useState(true);
    
  const handlesubmit=()=>{
    if(estado===true){
        setestado(false)
    }else{
        setestado(true)
    }
    console.log(estado);
    console.log(id);
    
  };
   

    return(
        <>
           <h1>{materia}</h1>
           <h2>sigla:{sigla}</h2>
           <h2>grupos asignados:{grupos_asignados}</h2>
           <input type="checkbox" onClick={handlesubmit}></input>
        </>
    );

}
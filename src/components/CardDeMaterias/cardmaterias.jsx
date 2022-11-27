import { useState } from "react";

export const Cardmaterias=({id,materia,sigla,grupos_asignados,seleccion})=>{
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
           <h1>{materia}</h1>
           <h2>sigla:{sigla}</h2>
           <h2>grupos asignados:{grupos_asignados}</h2>
           <input type="checkbox" name={id} value={estado} onChange={()=>handlechange()}></input>
        </>
    );

}
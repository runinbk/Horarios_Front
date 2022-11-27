import { useState } from "react";

export const Cardmaterias=({id,materia,sigla,grupos_asignados,seleccion})=>{
<<<<<<< HEAD
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
=======
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
   
>>>>>>> 511f3b825f594e2bec905b56966f6f71c098b08d

    return(
        <>
           <h1>{materia}</h1>
           <h2>sigla:{sigla}</h2>
           <h2>grupos asignados:{grupos_asignados}</h2>
<<<<<<< HEAD
           <input type="checkbox" name={id} value={estado} onChange={()=>handlechange()}></input>
=======
           <input type="checkbox" onClick={handlesubmit}></input>
>>>>>>> 511f3b825f594e2bec905b56966f6f71c098b08d
        </>
    );

}
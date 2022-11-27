import { useState } from "react";

export const Cardfilasgrupos=({id,grupo,semestre,docente,dia1,dia2,dia3})=>{
    const[estado,setestado]=useState(true);
    const handlesudmi=()=>{
      
          if(estado===true){
              setestado(false)
          }else{
              setestado(true)
          }
          console.log(estado);
          console.log(id);
      
    } 
    return(
        <>
            <td>{grupo}</td>
            <td>{semestre}</td>
            <td>{docente}</td>
            <td>{dia1}</td>
            <td>{dia2}</td>
            <td>{dia3}</td>
            <td> <input className="tiket" type="checkbox" name={id} onClick={handlesudmi} checked={estado}/></td>
   
        </>
    );
}
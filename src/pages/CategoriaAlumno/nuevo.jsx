 

import { Contenedorcardmaterias } from "../../components/CardDeMaterias/contenedorcardmaterias";
import { Titulocardmaterias } from "../../components/CardDeMaterias/titulocardmaterias";

const lista=[
    {id:1,
     materia:"Calculo1",
     sigla:"MAT101",
     grupos_asignados:15,  
     seleccion:true 
    },
    {id:2,
        materia:"Estructuras Discretas",
        sigla:"INF119",
        grupos_asignados:11,
        seleccion:true

       },
       {id:3,
        materia:"Fisica I",
        sigla:"FIS100",
        grupos_asignados:11,
        seleccion:false

       },
       {id:4,
        materia:"Ingles Tecnico I",
        sigla:"LIN100",
        grupos_asignados:8,
        seleccion:false

       },
       {id:5,
        materia:"Introduccion a la Informatica",
        sigla:"INF110",
        grupos_asignados:14,
        seleccion:false

       }

];


export const Nuevo=()=>{
    return(
      <div>
          <Titulocardmaterias 
            categoria="NUEVO INGRESO" 
            subtitulo="SELECCIONE LAS MATERIAS A INSCRIBIR" 
            boton="SIGUIENTE"
          />
          <Contenedorcardmaterias 
            lista={lista}
          />  
      </div>  
       
    );
}

import { Contenedorcardmaterias } from "../../components/CardDeMaterias/contenedorcardmaterias";
import { Titulocardmaterias } from "../../components/CardDeMaterias/titulocardmaterias";

const lista=[
    {id:1,
     materia:"Calculo2",
     sigla:"MAT102",
     grupos_asignados:15,  
     seleccion:true 
    },
    {id:2,
        materia:"algebra",
        sigla:"INF119",
        grupos_asignados:11,
        seleccion:true

       },
       {id:3,
        materia:"Fisica III",
        sigla:"FIS100",
        grupos_asignados:11,
        seleccion:false

       },
       {id:4,
        materia:"Ingles Tecnico II",
        sigla:"LIN100",
        grupos_asignados:8,
        seleccion:false

       },
       {id:5,
        materia:"Programacion II",
        sigla:"INF110",
        grupos_asignados:14,
        seleccion:false

       }

];


export const Selecmateriasant=()=>{
    return(
      <div>
          <Titulocardmaterias 
            categoria="Antiguo Ingreso" 
            subtitulo="Selccione Las Materias a Inscribir" 
            boton="SIGUIENTE"
            direccion="/antiguo/materiasInscribir/grupos"
          />
          <Contenedorcardmaterias 
            lista={lista}
           
          />  
      </div>  
       
    );
}
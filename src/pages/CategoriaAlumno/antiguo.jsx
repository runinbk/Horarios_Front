import { Contenedorcardmaterias } from "../../components/CardDeMaterias/contenedorcardmaterias";
import { Titulocardmaterias } from "../../components/CardDeMaterias/titulocardmaterias";

const lista=[
    {id:1,
     materia:"1er semestre",
     sigla:"MAT101",
     grupos_asignados:15,  
     seleccion:true 
    },
    {id:2,
        materia:"2do semestre",
        sigla:"INF119",
        grupos_asignados:11,
        seleccion:true

       },
       {id:3,
        materia:"3er semestre",
        sigla:"FIS100",
        grupos_asignados:11,
        seleccion:false

       },
       {id:4,
        materia:"4to semestre",
        sigla:"LIN100",
        grupos_asignados:8,
        seleccion:false

       },
       {id:5,
        materia:"5to semestre",
        sigla:"INF110",
        grupos_asignados:14,
        seleccion:false

       }

];


export const Antiguo=()=>{
    return(
      <div>
          <Titulocardmaterias 
            categoria="ANTIGUO INGRESO" 
            subtitulo="SELECCIONE EL/LOS SEMESTRE(S) DE SUS MATERIAS" 
            boton="SIGUIENTE"
          />
          <Contenedorcardmaterias 
            lista={lista}
          />  
      </div>  
       
    );
}
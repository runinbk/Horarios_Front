
import { Titulocardmaterias } from "../../components/CardDeMaterias/titulocardmaterias";
import { Contenedorcardsemestres } from "../../components/Cardsemestres/contenedorcardsemestre";

const lista=[
    {id:1,
     semestre:"1er semestre",
     materia1:"Ingles I", 
     materia2:"Calculo I",
     materia3:"Introduccion a la Informatica",
     materia4:"Fisica I",
     materia5:"Estructuras discretas", 
     materia6:"",
     materia7:"",
     materia8:"",
     seleccion:true
    },
    {id:2,
      semestre:"2do semestre",
      materia1:"Ingles II", 
      materia2:"Calculo II",
      materia3:"Programacion I",
      materia4:"Fisica II",
      materia5:"Algebra I", 
      materia6:"",
      materia7:"",
      materia8:"",
      seleccion:true
     },
     {id:3,
      semestre:"3er semestre",
      materia1:"Administracion", 
      materia2:"Ecuaciones Diferenciales",
      materia3:"Programacion II",
      materia4:"Fisica III",
      materia5:"Arquitectura", 
      materia6:"marketing",
      materia7:"",
      materia8:"",
      seleccion:true
     }

    

];


export const Antiguo=()=>{
    return(
      <div>
          <Titulocardmaterias 
            categoria="Antiguo Ingreso" 
            subtitulo="Seleccione El/Los Semestre(S) de sus materias" 
            boton="SIGUIENTE"
            direccion="/antiguo/materiasInscribir"
          />
          <Contenedorcardsemestres 
            lista={lista}
          />  
      </div>  
       
    );
}
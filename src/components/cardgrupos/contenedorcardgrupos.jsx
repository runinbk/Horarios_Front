import { Cardgrupos } from "./cardgrupos";

const grupos=[
    {id:1,
     grupo:"Z1",
     semestre:1,
     docente:"Acosta Cabezas",
     dia1:"lunes|19:45-21:15",
     dia2:"miercoles|19:45-21:15",
     dia3:"viernes|19:45-21:15",
     dia4:"",
     sigla:"INF110",
     select:false
    },
    {id:2,
        grupo:"Z2",
        semestre:1,
        docente:"Angelica Garzon",
        dia1:"lunes|19:45-21:15",
        dia2:"miercoles|19:45-21:15",
        dia3:"viernes|19:45-21:15",
        dia4:"",
        sigla:"INF110",
        select:false
       },
       {id:3,
        grupo:"Z3",
        semestre:1,
        docente:"Zuna",
        dia1:"lunes|19:45-21:15",
        dia2:"miercoles|19:45-21:15",
        dia3:"viernes|19:45-21:15",
        dia4:"",
        sigla:"INF110",
        select:true
       },
       {id:4,
        grupo:"Z4",
        semestre:1,
        docente:"Juan C. Contreras",
        dia1:"lunes|19:45-21:15",
        dia2:"miercoles|19:45-21:15",
        dia3:"viernes|19:45-21:15",
        dia4:"",
        sigla:"INF110",
        select:true
       }
       ,{id:5,
        grupo:"Z5",
        semestre:1,
        docente:"mollo",
        dia1:"lunes|19:45-21:15",
        dia2:"miercoles|19:45-21:15",
        dia3:"viernes|19:45-21:15",
        dia4:"",
        sigla:"INF110",
        select:false
       }


];
const grupos2=[
    {id:1,
     grupo:"Z1",
     semestre:1,
     docente:"Acosta Cabezas",
     dia1:"lunes|19:45-21:15",
     dia2:"miercoles|19:45-21:15",
     dia3:"viernes|19:45-21:15",
     dia4:"",
     sigla:"INF110",
     select:false
    },
    {id:2,
        grupo:"Z2",
        semestre:1,
        docente:"Angelica Garzon",
        dia1:"lunes|19:45-21:15",
        dia2:"miercoles|19:45-21:15",
        dia3:"viernes|19:45-21:15",
        dia4:"",
        sigla:"INF110",
        select:false
       },
       {id:3,
        grupo:"Z3",
        semestre:1,
        docente:"Zuna",
        dia1:"lunes|19:45-21:15",
        dia2:"miercoles|19:45-21:15",
        dia3:"viernes|19:45-21:15",
        dia4:"",
        sigla:"INF110",
        select:true
       },
       {id:4,
        grupo:"Z4",
        semestre:1,
        docente:"Juan C. Contreras",
        dia1:"lunes|19:45-21:15",
        dia2:"miercoles|19:45-21:15",
        dia3:"viernes|19:45-21:15",
        dia4:"",
        sigla:"INF110",
        select:true
       }
       ,{id:5,
        grupo:"Z5",
        semestre:1,
        docente:"mollo",
        dia1:"lunes|19:45-21:15",
        dia2:"miercoles|19:45-21:15",
        dia3:"viernes|19:45-21:15",
        dia4:"",
        sigla:"INF110",
        select:false
       }


];
   
const grupos3=[{id:1,gr:grupos,materia:"ESTRUCTURAS DISCRETAS"},{id:2,gr:grupos2,materia:"INTRODUCCION A LA INFORMATICA"}]

export const Contenedorcardgrupos=()=>{
    return(
            <div className="bloque1">
                 {grupos3.map(card=>(
                    <div className="contenedor_table" key={card.id}>
                      <Cardgrupos grupos={card.gr} materia={card.materia}/>
                    </div>
                 ))}
            </div>
    );
}
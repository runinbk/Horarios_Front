export const Cardmaterias=({materia,sigla,grupos_asignados,seleccion})=>{
    return(
        <>
           <h1>{materia}</h1>
           <h2>sigla:{sigla}</h2>
           <h2>grupos asignados:{grupos_asignados}</h2>
           <input type="checkbox" checked={seleccion}></input>
        </>
    );

}
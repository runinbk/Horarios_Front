export const Cardsemestres=({semestre,materia1,materia2,materia3,materia4,materia5,materia6,materia7,materia8,seleccion})=>{
    return(
        <>
           <h1>{semestre}</h1>
           <h3>{materia1}</h3>
           <h3>{materia2}</h3>
           <h3>{materia3}</h3>
           <h3>{materia4}</h3>
           <h3>{materia5}</h3>
           <h3>{materia6}</h3>
           <h3>{materia7}</h3>
           <h3>{materia8}</h3>
           
           <input type="checkbox" checked={seleccion}></input>
        </>
    );

}
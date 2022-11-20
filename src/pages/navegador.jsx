import { Link } from "react-router-dom";
export const Navegador=()=>{
    return(
        <div className="pagina">
        <ul>
            <li>
                <Link className="links" to="/">pagina1</Link>
            </li>
            <li>
                <Link className="links" to="pagina2">pagina2</Link>
            </li>
            <li>
                <Link className="links" to="pagina3">pagina3</Link>
            </li>
            <li>
                <Link className="links" to="pagina4">pagina4</Link>
            </li>
            <li>
                <Link className="links" to="pagina5">pagina5</Link>
            </li>
            <li>
                <Link className="links" to="pagina6">pagina6</Link>
            </li>
            
            
        </ul>
        
        
    </div>
    );
}
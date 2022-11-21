import { Link, useLocation } from "react-router-dom";
import { appRoutes } from "../../../config/routes/appRoutes";

const Sidebar = ({ isOpen, setIsOpen }) => {
    const { pathname } = useLocation();
    const getPathName = (path) => {
        if (path !== '/') {
            const newPath = `/${path}`;
            return newPath === pathname;
        }
        return path === pathname;
    }
    return (<aside className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className={`aside action ${isOpen ? 'active' : ''}`}>
            <button type="button" className={`btn aside ${isOpen ? 'active' : ''}`} onClick={e => setIsOpen(!isOpen)}>
                <span className="material-icons ">menu</span>
            </button>
        </div>

        <ul className="aside-menu-list">
            {appRoutes.map(({ labelText, icon, path }) => <li key={labelText} className="aside-item">
                <Link title={`${labelText.toUpperCase()}`} to={`${path}`} className={`aside-link ${getPathName(path) ? 'active' : ''}`}>
                    <span className={`material-icons aside-icon ${getPathName(path) ? 'active' : ''}`}>{`${icon}`}</span>
                    <span className="link-text">{`${labelText}`}</span>
                </Link>
            </li>)}
        </ul>

    </aside>);
}

export default Sidebar;
import { useRef, useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const mainRef = useRef();
    useEffect(() => {
        const handleClick = event => {
            const { innerWidth: width } = window;
            if (width <= 640) {
                setIsOpen(false);
            }
        };
        const element = mainRef.current;
        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);
        };
    }, []);
    return (<>
        <div className="app-container">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <main ref={mainRef} className="main">
                {children}
            </main>
        </div>
    </>);
}

export default Layout;
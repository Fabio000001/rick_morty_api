import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="container">
            <Outlet></Outlet>
            <footer>FOOTER</footer>
        </div>
    );
}

export default Layout;
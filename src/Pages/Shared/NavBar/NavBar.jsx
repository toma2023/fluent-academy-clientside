import { Link } from "react-router-dom";


const NavBar = () => {
   
        const navItems = (
        <>
            <li>
                <Link to="/" className="text-lg text-white font-bold">Home</Link>
            </li>
            <li>
                <Link to="/instructors" className="text-lg text-white font-bold">Instructors</Link>
            </li>
            <li>
                <Link to="/classes" className="text-lg text-white font-bold">Classes</Link>
            </li>
            <li>
                <Link to="/instructors" className="text-lg text-white font-bold">Dashboard</Link>
            </li>
           
            {/* {user && (
                <>
                    <li>
                        <Link to="/" className="text-lg text-cyan-900 font-bold">Add A Toy</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-lg text-cyan-900 font-bold">My Toys</Link>
                    </li>
                </>
            )} */}
        </>
        );

  

    return (
        <>
            <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-30 text-white bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                            {/* {
                                user && <NavLink onClick={handleLogOut} className={"btn btn-sm"} to="/">LogOut</NavLink>

                            } */}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Fluent <span className="text-green-600">Academy </span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;
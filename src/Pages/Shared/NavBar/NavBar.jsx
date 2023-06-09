import { useContext } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

import useSelectedCourse from "../../Hooks/useSelectedCourse";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [selects] = useSelectedCourse();
   
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    const navItems = (
        <>
            <li>
                <Link to="/" className="text-lg lg:text-white font-bold">Home</Link>
            </li>
            <li>
                <Link to="/instructors" className="text-lg lg:text-white font-bold">Instructors</Link>
            </li>
            <li>
                <Link to="/classes" className="text-lg lg:text-white font-bold">Classes</Link>
            </li>
            <li>
                <Link to="/dashboard" className="text-lg lg:text-white font-bold">Dashboard</Link>
            </li>
            <li><Link to="/dashboard/mySelectedClass">
           
            <button className="btn gap-2">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-primary">{selects?.length || 0}</div>
            </button>
        </Link></li>


            {user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost text-lg">LogOut</button>
            </>
                : <> <li><Link to="/login">Login</Link> </li></>}


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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow text-black bg-base-700 rounded-box w-52">
                            {navItems}

                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-2xl">Fluent <span className="text-blue-400">Academy </span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">


                    <label className="btn btn-ghost btn-circle avatar">
                        {user && (
                            <div className="w-24 rounded-full">
                                <img src={user?.photoURL} title={user.displayName} />
                                <h2 className={`hover:${user?.email}`}>
                                    {user?.email}
                                </h2>
                            </div>
                        )}
                    </label>



                </div>
            </div>
        </>
    );
};

export default NavBar;
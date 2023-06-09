import { FaBook, FaHome, FaUsers, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Pages/Hooks/UseAdmin";
import useInstructor from "../Pages/Hooks/useInstructor";
import { SiGoogleclassroom } from "react-icons/si";
import { MdAssignmentAdd, MdBookmarkAdd, MdOutlineAddChart, MdPayments } from "react-icons/md";



const Dashboard = () => {
    // TODO: 
    // const isAdmin = true;
    // const isInstructor = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();



    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-blue-400 ">
                    <li>
                        <NavLink to="/"><FaHome></FaHome>  Home </NavLink>
                    </li>

                    {
                        isAdmin ? (<>
                            <li><NavLink to="/"><FaHome></FaHome> Admin Home </NavLink></li>
                            <li><NavLink to="/"><FaHome></FaHome> All Classes </NavLink></li>
                            <li>
                                <NavLink to="/dashboard/manageClasses" className="hover:bg-emerald-700">
                                    <SiGoogleclassroom></SiGoogleclassroom>    Manage Classes </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers"><FaUsers></FaUsers>  Manage All Users</NavLink>
                            </li>
                           

                        </>) : isInstructor ? (

                            <>
                                <li>
                                    <NavLink to="/dashboard/addAClass" className="hover:bg-emerald-700"><MdAssignmentAdd></MdAssignmentAdd> Add a Class  </NavLink>
                                </li>
                                <li className="mt-2">
                                    <NavLink to="/dashboard/addClass" className="hover:bg-emerald-700"><MdOutlineAddChart></MdOutlineAddChart> My Classes  </NavLink>
                                </li>
                                <li className="mt-2">
                                    <NavLink to="/dashboard/addClass" className="hover:bg-emerald-700"><MdOutlineAddChart></MdOutlineAddChart>Total Enrolled Students </NavLink>
                                </li>

                            </>

                        ) : (
                            <>

                                <li>
                                    <NavLink to="/dashboard/mySelectedClass">   <MdBookmarkAdd></MdBookmarkAdd> My Selected Classes</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/payment"><MdPayments></MdPayments>  Payment History </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/booked"><FaBook></FaBook>  My Enrolled Class </NavLink>
                                </li>

                            </>

                        )
                        //     <>
                        //     <li>
                        //         <NavLink to="/"><FaHome></FaHome>  Home </NavLink>
                        //     </li>
                        //     <li>
                        //         <NavLink to="/dashboard/mySelectedClass">   <MdBookmarkAdd></MdBookmarkAdd> My Selected Classes</NavLink>
                        //     </li>
                        //     <li>
                        //         <NavLink to="/dashboard/payment"><MdPayments></MdPayments>  Payment History </NavLink>
                        //     </li>
                        //     <li>
                        //         <NavLink to="/dashboard/booked"><FaBook></FaBook>  My Enrolled Class </NavLink>
                        //     </li>

                        // </>

                    }
                    {/* instructor dashboard */}






                    {/* {
                        isAdmin && (
                            <>
                                <li>
                                    <NavLink to="/" className="hover:bg-emerald-700"><FaHome></FaHome>Admin Home </NavLink>
                                </li>
                                
                                
                                <li> <NavLink to="/dashboard/allUsers"><FaUsers></FaUsers>   Manage All Users</NavLink></li>
                            </>



                        )
                    }
                    {/* instructor dashboard */}



                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
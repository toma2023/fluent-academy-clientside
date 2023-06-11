import { FaBook, FaHome, FaUsers, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Pages/Hooks/UseAdmin";
import useInstructor from "../Pages/Hooks/useInstructor";
import { SiGoogleclassroom } from "react-icons/si";
import { MdAssignmentAdd, MdBookmarkAdd, MdOutlineAddChart } from "react-icons/md";
import useSelectedCourse from "../Pages/Hooks/useSelectedCourse";



const Dashboard = () => {
    // TODO: 
    // const isAdmin = true;
    // const isInstructor = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [selects] = useSelectedCourse();


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
                                <li><NavLink to="/"><FaHome></FaHome> Instructor Home </NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/addAClass" className="hover:bg-emerald-700"><MdAssignmentAdd></MdAssignmentAdd> Add a Class  </NavLink>
                                </li>
                                <li className="mt-2">
                                    <NavLink to="/dashboard/myClasses" className="hover:bg-emerald-700"><MdOutlineAddChart></MdOutlineAddChart> My Classes  </NavLink>
                                </li>
                               

                            </>

                        ) : (
                            <>
                                <li><NavLink to="/"><FaHome></FaHome> student Home </NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/mySelectedClass">   <MdBookmarkAdd></MdBookmarkAdd> My Selected Classes <span className="badge badge-secondary">+{selects?.length || 0}</span></NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to={`/dashboard/payment/${item._id}`}><MdPayments></MdPayments>  Payment  </NavLink>
                                </li> */}
                                <li>
                                    <NavLink to="/dashboard/enrolledClasses"><FaBook></FaBook>  My Enrolled Class </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory"><FaBook></FaBook>  Payment History </NavLink>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/MySelectedClass/AllUsers";
import AddAClass from "../Pages/Dashboard/AddAClass/AddAClass";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../Pages/Instructors/Admin/ManageClasses";
import MyClasses from "../Pages/Instructors/MyClasses";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClass/MySelectedClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import MyEnrolledClasses from "../Pages/Dashboard/MySelectedClass/MyEnrolledClasses";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import UpdateMyClasses from "../Pages/Instructors/UpdateMyClasses";
import ErrorPage from "../ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
           
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: 'mySelectedClass',
                element: <MySelectedClasses></MySelectedClasses>
            },
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addAClass',
                element: <AddAClass></AddAClass>
            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'payment/:id',
                element:<Payment></Payment> ,
              
            },
            {
                path: 'enrolledClasses',
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'updateMyClass/:id',
                element: <UpdateMyClasses></UpdateMyClasses>,
                loader: ({params})=>fetch(`http://localhost:5000/updateMyClass/${params.id}`)
            }
        ]
    }

]);



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
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import AllUsers from "../Pages/Dashboard/MySelectedClass/AllUsers";
import AddAClass from "../Pages/Dashboard/AddAClass/AddAClass";
import AdminRoute from "./AdminRoute";

import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../Pages/Instructors/Admin/ManageClasses";
import MyClasses from "../Pages/Instructors/MyClasses";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
            path: 'mySelectedClass',
            element: <MySelectedClass></MySelectedClass>
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



        ]
    }

]);



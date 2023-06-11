// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import { AiFillEdit } from "react-icons/ai";
// //import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

// const MyClasses = () => {

//     const { user } = useContext(AuthContext)
//     const [classes, setClasses] = useState([]);
//     useEffect(() => {
//         fetch('http://localhost:5000/addClass')
//             .then(res => res.json())
//             .then(data => {
//                 const filteredClass = data.filter(filtered => filtered.email
//                     === user?.email)
//                 // console.log(filteredClass)
//                 setClasses(filteredClass)
//             })

//     }, [user?.email])



//     return (
//         <div>
//             <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                     <tr>
//                         <th>#</th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Class Image
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Class Name
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Status
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Available Seats
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Price
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Enrolled
//                         </th>

//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Feedback
//                         </th>

//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Edit
//                         </th>

//                     </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                     {classes.map((cls, index) => (
//                         <tr key={cls?._id}>
//                             <td>{index + 1}</td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                                 <img src={cls?.image} alt="Class" className="h-12 w-12 rounded-full" />
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                                 {cls?.className}
//                             </td>
//                             <td>{cls.status}</td>


//                             <td className="px-6 py-4 whitespace-nowrap">
//                                 {cls.seats}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                                 {cls.price}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                                 <td className="px-6 py-4 whitespace-nowrap">
//                                     {cls.enrolled ? cls?.enrolled : "0"}
//                                 </td>
//                             </td>

//                             <td className="px-6 py-4 whitespace-nowrap">
//                                 {cls?.status === 'denied' ? cls?.feedback : ''}
//                             </td>

//                             <td>

//                                 <Link to={`/dashboard/updateMyClass/${cls._id}`}>
//                                     <AiFillEdit ></AiFillEdit>
//                                 </Link>

//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default MyClasses;


import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const MyClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/addClass")
            .then(res => res.json())
            .then(data => {
                setClasses(data);
            });
    }, []);

    return (
        <div className="my-12">
              <h2 className="text-5xl text-center font-bold mb-14">My <span className="text-secondary">Classes</span> </h2>
            <table className="min-w-full divide-y divide-gray-200 ml-4">
                <thead className="bg-gray-50">
                    <tr>
                        <th>#</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Class Image
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Class Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Available Seats
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Enrolled
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Feedback
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Edit
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {classes.map((cls, index) => (
                        <tr key={cls?._id}>
                            <td>{index + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <img src={cls?.image} alt="Class" className="h-12 w-12 rounded-full" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {cls?.className}
                            </td>
                            <td>{cls.status}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {cls.seats}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {cls.price}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {cls.enrolled ? cls.enrolled : "0"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {cls?.status === 'denied' ? cls?.feedback : ''}
                            </td>
                            <td>
                                <Link to={`/dashboard/updateMyClass/${cls._id}`}>
                                    <AiFillEdit></AiFillEdit>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyClasses;








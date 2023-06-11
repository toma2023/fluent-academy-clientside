import Swal from "sweetalert2";
import useSelectedCourse from "../../Hooks/useSelectedCourse";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const MySelectedClasses = () => {
    const [selects, refetch] = useSelectedCourse();


    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fluent-academy-server.vercel.app/selects/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div>
            <h2 className="text-5xl text-center font-bold mb-14">My <span className="text-secondary"> Selected Classes</span> </h2>
            <div className=" flex text-2xl font-semibold justify-evenly gap-4">
                <h2>Total Items: {selects.length}</h2>
            </div>
            <div className="overflow-x-auto w-full ms-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th># </th>
                            <th>Courses</th>
                            <th>Course Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>PAyment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selects.map((item, index) => <tr
                                key={item._id}

                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.className}
                                </td>
                                <td className="text-end"> $ {item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white">
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>
                                <td>
                                    <Link to={`/dashboard/payment/${item._id}`}> <button className="btn btn-primary">Pay</button></Link>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;
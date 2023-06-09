import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
//FaUserShield

const AllUsers = () => {
const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    

    const handleMakeAdmin = user => {
      fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

const handleMakeInstructor = user =>{
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
        method: 'PATCH',

    })
        .then(res => res.json())
        .then(data => {
           // console.log(data)
            if (data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
}

    
    return (
        <div>
          
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>

                               
                                {
                                    user.role === 'admin' ? <span className="text-sky-600 font-bold">Admin</span> : <button onClick={()=>handleMakeAdmin(user)} className="btn btn-active btn-neutral">Make Admin</button>
                                }
                                    
                                
                                </td>
                                <td>
                               
                                {
                                    user.role === 'instructor' ? <span className="text-green-600 font-bold">Instructor</span> : <button onClick={()=>handleMakeInstructor(user)} className="btn btn-active btn-neutral">Make Instructor</button>
                                }
                                    
                                 
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
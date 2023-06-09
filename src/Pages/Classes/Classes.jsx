import {  useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAddClass from '../Hooks/useAddClass';
import Swal from 'sweetalert2';
import { Navigate, useLocation } from 'react-router-dom';



const Classes = () => {
    const [addClass, ,refetch] = useAddClass();
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const approvedClasses = addClass.filter(classData => classData.status === 'approved')
    
    const handleAddToCart = (classData) => {
        const {_id, seats, name, className, image, price} = classData;
        //console.log(classData);
        if (user && user.email) {
            const selectItem = { selectItemId: _id, seats, name, className, image, price, email: user.email }
            fetch('http://localhost:5000/selects', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectItem)
            })
                .then(res => res.json())
                .then(data => {
                    refetch();//refetch cart to be update the number of items in the cart
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Course added on the Selected Items',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

        }
        else {
            Swal.fire({
                title: 'Please Login to select the Course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Navigate('/login', { state: { from: location } })
                }
            })
        }

    }
    return (
        <div>
            <h2>Approved Classes</h2>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    approvedClasses.map(data=><> <div key={data._id} className='grid md:grid-cols-3 gap-8'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={data.image} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {data.className}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Instructor Name:{data.name}</p>
                            <p>Available seats: {data.seats}</p>
                            <p>Price: $ {data.price}</p>
                            
                            <div className="card-actions justify-end">
                            <button onClick={()=>handleAddToCart(data)} className="btn btn-active btn-neutral">Neutral</button>
                                
                            </div>
                        </div>
                    </div>
    
                </div></>)
                }
            </div>
           
        </div>
    );
};

export default Classes;
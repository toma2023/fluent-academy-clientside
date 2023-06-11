import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAddClass from '../Hooks/useAddClass';
import Swal from 'sweetalert2';
import { Navigate, useLocation } from 'react-router-dom';

const Classes = () => {
    const [addClass, , refetch] = useAddClass();
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const approvedClasses = addClass.filter(classData => classData.status === 'approved');

    const handleAddToCart = (classData) => {
        const { _id, seats, name, className, image, price } = classData;

        if (user && user?.email) {
            if (seats > 0 && user?.role !== 'admin' && user?.role !== 'instructor') {
                const selectItem = {
                    selectItemId: _id,
                    seats,
                    name,
                    className,
                    image,
                    price,
                    email: user.email
                };

                fetch('http://localhost:5000/selects', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(selectItem)
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch();
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Course added to the Selected Items',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    });
            } else {
                Swal.fire({
                    title: 'Cannot Select Course',
                    text: 'Please check the availability of seats and your user role.',
                    icon: 'warning',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
            }
        } else {
            Swal.fire({
                title: 'Please Login to Select the Course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div>
            <h2>Approved Classes</h2>
            <div className='grid md:grid-cols-3 gap-8 my-32'>
                {approvedClasses.map(data => (
                    <div key={data?._id} className='grid md:grid-cols-3 gap-8'>
                        <div className={`card w-96 bg-${data.seats === 0 ? 'red' : 'base-100'} shadow-xl`}>
                            <figure>
                                <img src={data?.image} alt="Class" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {data?.className}
                                    {data?.seats === 0 && <div className="badge badge-secondary">FULL</div>}
                                </h2>
                                <p>Instructor Name: {data?.name}</p>
                                <p>Available seats: {data?.seats}</p>
                                <p>Price: $ {data?.price}</p>
                                <div className="card-actions justify-end">
                                    {/* <button
                                        onClick={() => handleAddToCart(data)}
                                        disabled={data.seats === 0 || user?.role === 'admin' || user?.role === 'instructor'}
                                        className="btn btn-active btn-neutral"
                                    >
                                        Select
                                    </button> */}

                                    {!user || (user?.role !== 'admin' && user?.role !== 'instructor') ? (
                                        <button
                                            onClick={() => handleAddToCart(data)}
                                            disabled={data?.seats === 0}
                                            className="btn btn-active btn-neutral"
                                        >
                                            Select
                                        </button>
                                    ) : (
                                        <button
                                            disabled
                                            className="btn btn-disabled btn-neutral"
                                        >
                                            Select
                                        </button>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;

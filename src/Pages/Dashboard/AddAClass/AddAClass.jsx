import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddAClass = () => {
    const enrollStudent = 0;
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then((res) => res.json())
            .then((imgResponse) => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { className, seats, price, name, email } = data;
                    const newClass = {
                        name,
                        className,
                        seats: parseFloat(seats),
                        email: email,
                        price: parseFloat(price),
                        image: imgURL,
                        status: 'pending',
                        enrollStudent: parseFloat(enrollStudent) ,
                        userPhoto: user.photoURL
                    };
                  
                    axiosSecure
                        .post('/addClass', newClass)
                        .then((data) => {
                            console.log('after posting new class', data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                        .catch((error) => {
                            // Handle the error
                            console.log(error);
                        });
                }
            })
            .catch((error) => {
                // Handle the error
                console.log(error);
            });
    };

    return (
        <div>
             <h2 className="text-5xl  font-semibold mb-8"><span className="text-secondary">Add</span> A New Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Class Name"
                        {...register('className', { required: true, maxLength: 120 })}
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Available Seats</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Available Seats"
                        {...register('seats', { required: true, maxLength: 120 })}
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Price"
                        {...register('price', { required: true, maxLength: 120 })}
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name</span>
                    </label>
                    <input type="text" placeholder="Instructor Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Instructor Email"
                        {...register("email", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full max-w-xs"

                    />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Image</span>
                    </label>
                    <input
                        type="file"
                        {...register('image', { required: true })}
                        className="file-input file-input-bordered w-full max-w-xs"
                    />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddAClass;

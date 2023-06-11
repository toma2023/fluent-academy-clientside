import { useState } from "react";
import { useParams } from "react-router-dom";
import useAddClass from "../Hooks/useAddClass";
import Swal from "sweetalert2";



const UpdateMyClasses = () => {

    const { id } = useParams();
    const [addClass, , refetch] = useAddClass();
    const [updatedMyClass, setUpdatedMyClass] = useState({});

    const updateMyClass = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = parseFloat(form.price.value);
        const seats = form.seats.value;
        const className = form.className.value;
        const updatedClass = { price, seats, className };
        setUpdatedMyClass(updatedClass);

        //send data to the server
        fetch(`http://localhost:5000/updateMyClass/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedClass),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Toy Updated Successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            });
    };

    const selectedClass = addClass.find((cls) => cls._id === id);
    if (!selectedClass) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <div className="bg-blue-400 p-24">
                <form onSubmit={updateMyClass}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text"> Class Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="className"
                                    defaultValue={selectedClass.className}
                                    placeholder="class name"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text"> Price</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="price"
                                    defaultValue={selectedClass.price}
                                    placeholder="price"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text"> Seats</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="seats"
                                    defaultValue={selectedClass?.seats}
                                    placeholder="seats"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="mt-6">
                        <input type="submit" value="Update Class" className="btn btn-block accent" />
                    </div>
                </form>
            </div>







            {/* {
            addClass.map(cls=>
                <div key={cls._id} className="bg-[#add8e6] p-24">
            <form onSubmit={updateMyClass}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> Class Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="className" defaultValue={cls.className} placeholder="class name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" defaultValue={cls.price} placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> Seats</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="seats" defaultValue={cls?.seats} placeholder="seats" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='mt-6'>
                    <input type="submit" value="Update Class" className="btn btn-block accent" />
                </div>
            </form>
        </div>  
                
                )
          }
           */}

        </div>
    );
};

export default UpdateMyClasses;
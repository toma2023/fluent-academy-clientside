import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const onSubmit = (data) => {
        // Handle form submission
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email };
                        console.log(saveUser);
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.message === 'user already exists') {
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'error',
                                        title: 'User already exists',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                } else {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                            .catch(error => {
                                console.log(error);
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'error',
                                    title: 'An error occurred',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            });
                    })
                    .catch(error => console.log(error));
            });
    };


    return (
        <div className="hero min-h-screen bg-base-200 mb-12">
            <div className="hero-content flex-col lg:flex-row gap-4">
                <div className="text-center lg:text-left">
                    <img src="https://i.ibb.co/dGrbwJS/register-removebg-preview.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered"
                                />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("email", { required: true })}
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                                    })}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                {errors.password?.type === "required" && (
                                    <span className="text-red-600">Password is required</span>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <span className="text-red-600">Password must be at least 6 characters</span>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <span className="text-red-600">
                                        Password must contain at least one capital letter and one special character
                                    </span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("confirm", { required: true })}
                                    name="confirm"
                                    placeholder="confirm password"
                                    className="input input-bordered"
                                />
                                {errors.confirm && (
                                    <span className="text-red-600">Confirm password is required</span>
                                )}
                            </div>
                            {/* <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Item Image*</span>
                                </label>
                                <input
                                    type="file"
                                    {...register("image", { required: true })}
                                    className="file-input file-input-bordered w-full max-w-xs"
                                />
                                {errors.image && <span className="text-red-600">Upload photo is required</span>}
                            </div>
                            <input className="btn btn-sm mt-4" type="submit" value="Add Item" /> */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-600">Photo URL  is required</span>}
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-active btn-neutral" type="submit" value="Register" />
                                </div>
                        </form>
                        <p className="my-4 text-center">
                            Already Have an Account? <Link className="text-blue-600 font-bold" to="/login">Login</Link>
                        </p>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

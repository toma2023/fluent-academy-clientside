import { Link, useLoaderData, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLoaderData();
    const from = location?.state?.from?.pathname || "/";
    const [passwordVisible, setPasswordVisible] = useState(false);


    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: 'User Login Successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })

    }
    return (
		<div className='max-w-screen-xl mx-auto'>
			<div className='hero min-h-screen bg-base-200 mb-12'>
				<div className='hero-content flex-col lg:flex-row gap-4'>
					<div className='text-center lg:text-left'>
						<img
							src='https://i.ibb.co/LvbB0Ys/login-removebg-preview.png'
							alt=''
						/>
					</div>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<div className='card-body'>
							<h1 className='text-5xl font-bold'>Login now!</h1>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>
											Email
										</span>
									</label>
									<input
										type='text'
										{...register("email", {
											required: true,
											maxLength: 120,
										})}
										name='email'
										placeholder='email'
										className='input input-bordered'
									/>
								</div>
								<div className='mb-4'>
									<label
										className='block text-gray-700 text-sm font-bold mb-2'
										htmlFor='password'
									>
										Password:
									</label>

									<div className='flex items-center '>
										<input
											className='input input-bordered w-full'
											type={
												passwordVisible
													? "text"
													: "password"
											}
											id='password'
											{...register("password", {
												required: true,
												maxLength: 120,
											})}
										/>
										<span
											className='text-blue-500 ml-2 cursor-pointer'
											onClick={handlePasswordVisibility}
										>
											{passwordVisible ? (
												<AiOutlineEyeInvisible />
											) : (
												<AiOutlineEye />
											)}
										</span>
									</div>
								</div>

								{/* <div>
                                    <label htmlFor="password">
                                    <span className="label-text">Password</span>
                                        </label>
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        id="password"
                                        {...register('password', { required: true, maxLength: 120 })}
                                    />
                                  
                                    <span onClick={handlePasswordVisibility}>
                                        {passwordVisible ? 'Hide' : 'Show'}
                                    </span>
                                </div> */}
								<div className='form-control mt-6'>
									<input
										className='btn btn-active btn-neutral'
										type='submit'
										value='Login'
									/>
								</div>
							</form>
							<p className='my-4 text-center'>
								New to Fluent Academy ?{" "}
								<Link
									className='text-blue-600 font-bold'
									to='/register'
								>
									{" "}
									Sign Up
								</Link>{" "}
							</p>
							<SocialLogin></SocialLogin>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;




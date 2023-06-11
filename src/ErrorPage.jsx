import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className='grid items-center justify-center  mt-32'>
           
            
        <img className=' text-center rounded-md mb-8' src="https://i.ibb.co/YNKJwFQ/404-error.jpg" alt="" />
        <div className="text-center">
        <h4 className='text-4xl font-semibold'>Oops, something went wrong!!</h4>
        <Link to="/"> <button className='mt-6 mb-20 mx-32 btn btn-active'><span className='text-blue mr-2'> <FaArrowLeft></FaArrowLeft></span>  Go Back To Home</button></Link>
        </div>

    </div>

   
    );
};

export default ErrorPage;
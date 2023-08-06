import { BsFillBellFill } from 'react-icons/bs';

const Subscribe = () => {
    return (
        <div className="bg-blue-600 md:flex px-5 md:px-0 py-20 items-center justify-center gap-8 rounded-md">
            
            <div>

            <BsFillBellFill className="text-7xl text-white"></BsFillBellFill>
            </div>
            <div className="">
                <h2 className="text-3xl font-semibold mt-3"><span className="text-white ">Subscribe</span> <br />
                    to our newsletter

                </h2>
            </div>
            <div className=" flex relative mt-4">
            <input   type="text" placeholder="Type here" className="input input-bordered input-lg w-[90%] md:w-[400px]  " />
            <button className="btn btn-primary absolute z-10 right-0 h-full">Subscribe</button>
            </div>

        </div>
    );
};

export default Subscribe;
import {  useEffect, useState } from "react";

const Instructors = () => {
    const [instructors, setInstructors] = useState();
   
    useEffect(() => {
        fetch("https://fluent-academy-server.vercel.app/users")
            .then((res) => res.json())
            .then((data) => {
                const instructorUsers = data.filter((user) => user.role === "instructor");
                setInstructors(instructorUsers);
            });
    }, []);


    return (
       
        <div>
            <div
                className="hero min-h-screen"
                style={{ backgroundImage: `url("https://i.ibb.co/hm50pm7/instructor-cover.jpg")` }}
            >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md space-y-7 ">
                        <h1 className="mb-5 text-5xl font-bold ">Celebrating Excellence in Education</h1>
                        <p className="text-2xl ">Recognizing the Best Teacher for Outstanding Impact and Dedication</p>
                        <div className="flex items-center justify-center">
                            <button className="btn btn-outline btn-accent">Give us Call</button>
                            <p className="ml-5 text-lg"> +034748000</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="my-14 text-5xl text-center font-bold mb-8">
                <span className="text-primary">Our Honourable</span> Instructors
            </h2>
            <div className="my-14 grid md:grid-cols-3 gap-4 mt-12">
                {instructors?.map((instructor) => (
                    <div key={instructor?._id} className="card card-compact w-96 bg-blue-300 shadow-xl">
                        <figure>
                            <img src={instructor?.
                                photo
                            } alt="Instructor" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Instructor Name: {instructor?.name}</h2>
                            <p>Email: {instructor?.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default Instructors;
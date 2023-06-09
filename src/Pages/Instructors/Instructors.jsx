import { useEffect, useState } from "react";



const Instructors = () => {
    const [instructors, setInstructors] = useState();
    //How does reduce work
    useEffect(() => {
        // Simulating fetching instructor data
        const fetchInstructors = async () => {
            try {
                const response = await fetch("http://localhost:5000/instructors");
                const instructors = await response.json();
                setInstructors(instructors);
            } catch (error) {
                console.error("Error fetching instructors:", error);
            }
        };

        fetchInstructors();
    }, []);


    return (
        <div className="mt">
            <div className="overflow-x-auto w-full ms-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th># </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructors?.map((instructor, index) => <tr
                                key={instructor.id}

                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={instructor.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {instructor.name}
                                </td>
                                <td>  {instructor.email}</td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructors;
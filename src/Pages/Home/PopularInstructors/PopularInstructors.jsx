import { useEffect, useState } from "react";

const PopularInstructors = () => {
    const [topInstructors, setTopInstructors] = useState([]);

    useEffect(() => {
        // Simulating fetching instructor data
        const fetchInstructors = async () => {
            try {
                const response = await fetch("popularInstructors.json");
                const instructors = await response.json();
                const sortedInstructors = [...instructors].sort((a, b) => b.students - a.students);
                const topSixInstructors = sortedInstructors.slice(0, 6);

                setTopInstructors(topSixInstructors);
            } catch (error) {
                console.error("Error fetching instructors:", error);
            }
        };

        fetchInstructors();
    }, []);

    return (
        <div className="my-14">
            <h2 className="text-3xl font-bold mb-4">Popular Instructors</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {topInstructors.map((instructor) => (
                    <div key={instructor.id} className="rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={instructor.image}
                            alt={instructor.name}
                            className="w-full  object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
                            <p className="text-gray-700 mb-2">{instructor.specialization}</p>
                            <p className="text-gray-700">Students: {instructor.students}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularInstructors;
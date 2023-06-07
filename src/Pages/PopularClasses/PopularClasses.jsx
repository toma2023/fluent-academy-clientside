import { useEffect, useState } from "react";


const PopularClasses = () => {
    const [topClasses, setTopClasses] = useState([]);
    useEffect(() => {
        //class data
        const fetchClasses = async () => {
            try {
                const response = await fetch("popularClass.json"); 
                const classes = await response.json();
                const sortedClasses = [...classes].sort((a, b) => b.students - a.students);
                const topSixClasses = sortedClasses.slice(0, 6);

                setTopClasses(topSixClasses);
            } catch (error) {
                console.error("Error fetching classes:", error);
            }
        };

        fetchClasses();
    }, []);
    return (
        <div className="my-14">
            <h2>Popular Classes</h2>
            <h2 className="text-3xl font-bold mb-4">Top Classes</h2>
            <div className="grid md:grid-cols-3 gap-4">
                {topClasses.map((classItem) => (
                    <div key={classItem.id} className="border p-4 rounded-lg">
                        <img src={classItem.image} alt={classItem.name}  className="w-full h-48 object-cover mb-2 rounded-lg" />
                        <h3 className="text-xl font-bold mb-2">{classItem.name}</h3>
                        <p>{classItem.details}</p>
                        <p className="mt-2 text-gray-700">Price: {classItem.price}</p>
                        <p className="mt-2 text-gray-700">Students: {classItem.students}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;
import { useEffect, useState } from "react";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
   
        fetch('http://localhost:5000/payments')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPopularClasses(data);
            })
           
  
}, []);


  return (
    // <div>
    //  <h2 className="text-5xl text-center font-bold my-14">Our<span className="text-secondary"> Popular</span>  Classes</h2>
    //   <div className="grid grid-cols-3 gap-4">
    //     {popularClasses?.map((cls) => (
    //       <div
    //         key={cls?.className}
    //         className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
    //       >
    //         <img
    //           src={cls?.classImg}
    //           alt={cls?.className}
    //           className="w-32 h-32 object-cover rounded-full mb-4"
    //         />
    //         <h3 className="text-xl font-bold mb-2">{cls?.className}</h3>
    //         <p className="text-gray-600">{cls?.studentCount} students</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div></div>
  );
};

export default PopularClasses;

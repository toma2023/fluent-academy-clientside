
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PopularClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: topClass = [] } = useQuery({
        queryKey: ["topClass"],
        queryFn: async () => {
        const res = await axiosSecure(`/topClass?limit=${6}&sortBy=enrollStudent`);
        console.log(res.data);
        return res.data;
        }
    })

    return (
        <div>
         <h2 className="text-5xl text-center font-bold my-14">Our<span className="text-secondary"> Popular</span>  Classes</h2>
          <div className="grid grid-cols-3 gap-4">
            {topClass?.map((cls) => (
              <div
                key={cls?.className}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
              >
                <img
                  src={cls?.image}
                  alt={cls?.className}
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{cls?.className}</h3>
                <p className="text-gray-600">{cls?.seats} students</p>
                <p className="text-gray-600">Enrolled: {cls?.enrollStudent} </p>
              </div>
            ))}
          </div>
        </div>
        
    );
};

export default PopularClasses;

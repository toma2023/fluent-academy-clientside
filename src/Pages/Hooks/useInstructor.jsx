import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useInstructor = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            if (!loading && user?.email) {
                const res = await axiosSecure.get(`users/instructor/${user?.email}`);
                return res.data.instructor;
            }
        }
    });
    return [isInstructor, isInstructorLoading]
}

export default useInstructor;
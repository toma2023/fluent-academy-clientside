import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useSelectedCourse = () => {
    const { user, loading } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
     const [axiosSecure] = useAxiosSecure();
 
     const { refetch, data: selects = [] } = useQuery({
         queryKey: ['carts', user?.email],
         enabled: !loading,
         queryFn: async () => {
            const res = await axiosSecure(`/selects?email=${user?.email}`)
           // console.log('res from axios', res)
            return res.data;
        },
    })
    return [selects, refetch]
}

export default useSelectedCourse;
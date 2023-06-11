
import { useQuery } from 'react-query';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useEnrolledClass = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: payments = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure(`/payments/${user?.email}`)
            return res.json();
        }
    })

    return [payments, loading, refetch]

}

export default useEnrolledClass;
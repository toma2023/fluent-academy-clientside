import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useCart = () => {
    const { user} = useContext(AuthContext);
    const { isLoading,  data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
                const res = await fetch(`https://fluent-academy-server.vercel.app/carts?email=${user?.email}`)
                 return res.json();
                }
            })

                return [cart, isLoading]
            }
   
    

export default useCart;
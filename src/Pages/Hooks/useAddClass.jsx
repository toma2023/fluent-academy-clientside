import { useQuery } from "@tanstack/react-query";


const useAddClass = () => {
    const { data: addClass = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['addClass'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/addClass');
            return res.json();
        }
    })

    return [addClass, loading, refetch]

}

export default useAddClass;
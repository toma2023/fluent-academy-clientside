import { useQuery } from "@tanstack/react-query";


const useAddClass = () => {
    const { data: addClass = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['addClass'],
        queryFn: async () => {
            const res = await fetch('https://fluent-academy-server.vercel.app/addClass');
            return res.json();
        }
    })

    return [addClass, loading, refetch]

}

export default useAddClass;
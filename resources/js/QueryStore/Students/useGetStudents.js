import { useQuery } from "@tanstack/vue-query";
import { getAllStudents } from "../../services/Students/apiStudents";

export function useGetStudents() {
    const { isPending, isFetching, isError, data, error } = useQuery({
        queryKey: ["students"],
        queryFn: getAllStudents,
    });

    return { isPending, data };
}

import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { addStudent as addStudentAPI } from "../../services/Students/apiStudents";

export function useAddStudent() {
    const queryClient = useQueryClient();
    const { mutate: addStudent, isPending } = useMutation({
        mutationFn: ({ name, course }) => addStudentAPI({ name, course }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["students"] });
        },
    });

    return { addStudent, isPending };
}

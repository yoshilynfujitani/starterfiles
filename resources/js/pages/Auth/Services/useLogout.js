import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { Logout } from "../../../services/Auth/apiAuth";

export function useLogout() {
    const queryClient = useQueryClient();
    const AddStudent = useMutation({
        mutationFn: () => Logout(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user"] });
        },
    });

    return AddStudent;
}

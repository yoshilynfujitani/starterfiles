import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { Login as LoginAPI } from "../../../services/Auth/apiAuth";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../../PiniaStore/AuthStore";
export function useLogin() {
    const queryClient = useQueryClient();
    const router = useRouter();
    const { setUserInfo } = useAuthStore();

    const handleSuccess = (data) => {
        setUserInfo(data.data);

        router.push("/");
    };

    const handleError = (error) => {
        if (error.response && error.response.status === 401) {
            queryClient.setQueryData(
                ["loginError"],
                error.response.data.message
            );
        } else {
            queryClient.setQueryData(["loginError"], error.message);
        }
    };

    const { mutate: login, isPending } = useMutation({
        mutationFn: async ({ email, password }) => {
            const response = await LoginAPI({ email, password });

            if (response.status === 200) {
                return response;
            } else {
                throw new Error(response.response.data.message);
            }
        },

        onSuccess: handleSuccess,
        onError: handleError,
    });

    return { login, isPending };
}

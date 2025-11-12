import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchLogin } from "../api";
import type { TLoginData } from "../model";
import { EQueryKeys } from "@/core/config/query";

export const useLoginMutation = () => {
    const queryClient = useQueryClient();

    const mutationFn = async (data: TLoginData) => {
        const loginResponse = await fetchLogin(data);

        queryClient.invalidateQueries({ queryKey: [EQueryKeys.ACCOUNT] });

        return loginResponse;
    };

    const mutation = useMutation({
        mutationKey: [EQueryKeys.AUTH],
        mutationFn
    });

    return mutation;
};

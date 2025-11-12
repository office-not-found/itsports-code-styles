import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { fetchLogout } from "../api";
import { useAccountStore } from "../model";
import { EQueryKeys } from "@/core/config/query";
import { ROUTES } from "@/core/config/routes";

export const useLogoutMutation = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const resetAccount = useAccountStore((state) => state.resetAccount);

    const mutation = useMutation({
        mutationKey: [EQueryKeys.AUTH],
        mutationFn: fetchLogout,
        onSuccess: () => {
            resetAccount();
            queryClient.clear();
            navigate(ROUTES.LOGIN, { replace: true });
        }
    });

    return mutation;
};

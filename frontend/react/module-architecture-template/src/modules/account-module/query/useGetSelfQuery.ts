import { useQuery } from "@tanstack/react-query";
import { fetchGetSelf } from "../api";
import { useAccountStore } from "../model";
import { EQueryKeys } from "@/core/config/query";

export const useGetSelfQuery = () => {
    const setAccount = useAccountStore((state) => state.setAccount);

    const queryFn = async () => {
        const data = await fetchGetSelf();

        setAccount({ ...data, isAuth: true });

        return data;
    };

    const query = useQuery({
        queryKey: [EQueryKeys.ACCOUNT],
        queryFn
    });

    return query;
};

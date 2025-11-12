import { useEffect, type PropsWithChildren } from "react";
import { useLocation, useNavigate } from "react-router";
import { ROUTES } from "@/core/config/routes";
import { LoaderOverlay } from "@/core/ui";
import { useGetSelfQuery } from "@/modules/account-module/query";

export const CheckAuthProvider = ({ children }: PropsWithChildren) => {
    const navigate = useNavigate();
    const location = useLocation();

    const { isPending, isSuccess, isError } = useGetSelfQuery();

    useEffect(() => {
        if (isSuccess) {
            if (location.pathname === ROUTES.LOGIN) {
                navigate(ROUTES.INDEX, { replace: true });
            }
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) navigate(ROUTES.LOGIN, { replace: true });
    }, [isError]);

    if (isPending) return <LoaderOverlay visible={true} />;

    return <>{children}</>;
};

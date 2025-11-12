import { Outlet } from "react-router";
import styles from "./layout.module.scss";

export const Layout = () => {
    // const location = useLocation();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (location.pathname === ROUTES.INDEX) navigate(ROUTES.USERS, { replace: true });
    // }, [location.pathname]);

    return (
        <div className={styles.layout}>
            <Outlet />
        </div>
    );
};

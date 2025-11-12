import { Link, useRouteError } from "react-router";
import styles from "./errorPage.module.scss";
import { ROUTES } from "@/core/config/routes";
import { Button } from "@/core/ui";

export const ErrorPage = () => {
    const routeError = useRouteError();
    const errorMessage = routeError;

    return (
        <div className={styles["error-page"]}>
            <div className={styles["error-page__container"]}>
                <h1 className={styles["error-page__title"]}>Something went wrong</h1>
                <p className={styles["error-page__text"]}>{String(errorMessage)}</p>
                <Button
                    component={Link}
                    to={ROUTES.INDEX}
                    className={styles["error-page__button"]}
                >
                    Home
                </Button>
            </div>
        </div>
    );
};

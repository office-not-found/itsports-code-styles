import { Link } from "react-router";
import styles from "./notFoundPage.module.scss";
import { ROUTES } from "@/core/config/routes";
import { Button } from "@/core/ui";

export const NotFoundPage = () => {
    return (
        <div className={styles["not-found-page"]}>
            <div className={styles["not-found-page__container"]}>
                <div className={styles["not-found-page__icon"]}>
                    <svg
                        width="300"
                        height="100"
                        viewBox="0 0 300 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Цифра 4 - левая */}
                        <g className={styles["number-4"]}>
                            <path
                                d="M20 40L20 100L40 100L40 120L60 120L60 100L80 100L80 40L60 40L60 80L40 80L40 40L20 40Z"
                                fill="var(--mantine-color-red-0)"
                            />
                        </g>

                        {/* Цифра 0 - центральная */}
                        <g className={styles["number-0"]}>
                            <circle
                                cx="150"
                                cy="80"
                                r="30"
                                stroke="var(--mantine-color-red-0)"
                                strokeWidth="12"
                                fill="none"
                            />
                        </g>

                        {/* Цифра 4 - правая */}
                        <g className={styles["number-4-second"]}>
                            <path
                                d="M220 40L220 100L240 100L240 120L260 120L260 100L280 100L280 40L260 40L260 80L240 80L240 40L220 40Z"
                                fill="var(--mantine-color-red-0)"
                            />
                        </g>
                    </svg>
                </div>

                <div className={styles["not-found-page__content"]}>
                    <h2 className={styles["not-found-page__subtitle"]}>
                        Страница не найдена
                    </h2>
                    <p className={styles["not-found-page__text"]}>
                        К сожалению, запрашиваемая страница не существует.
                    </p>
                    <Button component={Link} to={ROUTES.INDEX} size="md">
                        На главную
                    </Button>
                </div>
            </div>
        </div>
    );
};

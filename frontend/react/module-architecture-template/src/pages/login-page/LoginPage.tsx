import styles from "./loginPage.module.scss";
import { LoginForm } from "@/modules/account-module/ui";

export const LoginPage = () => (
    <div className={styles["login-page"]}>
        <div className={styles["login-page__form"]}>
            <LoginForm />
        </div>
    </div>
);

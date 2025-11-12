import styles from "./loginForm.module.scss";
import { Button, PasswordInput, TextInput } from "@/core/ui";
import { useLoginForm } from "@/modules/account-module/lib";

export const LoginForm = () => {
    const { onSubmit, register, isPending, errors } = useLoginForm();

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <h1 className={styles.form__title}>Authorization</h1>
            <div className={styles.form__content}>
                <TextInput
                    {...register("username")}
                    label="Username"
                    placeholder="Enter your username"
                    error={errors.username?.message}
                    disabled={isPending}
                />
                <PasswordInput
                    {...register("password")}
                    label="Password"
                    placeholder="Enter your password"
                    error={errors.password?.message}
                    disabled={isPending}
                />
                <Button type="submit" loading={isPending}>
                    Log in
                </Button>
            </div>
        </form>
    );
};

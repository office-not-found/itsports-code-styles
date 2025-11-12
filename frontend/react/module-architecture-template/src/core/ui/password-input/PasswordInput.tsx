import { PasswordInput as PasswordInputFromLibUi } from "@mantine/core";
import type { ComponentProps } from "react";
import styles from "./passwordInput.module.scss";

interface PasswordInputProps extends ComponentProps<typeof PasswordInputFromLibUi> {}

export const PasswordInput = ({ ...props }: PasswordInputProps) => (
    <PasswordInputFromLibUi
        classNames={{
            input: styles.input
        }}
        {...props}
    />
);

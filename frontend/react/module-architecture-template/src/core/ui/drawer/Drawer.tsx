import { Drawer as DrawerFromLibUi } from "@mantine/core";
import type { ComponentProps } from "react";

interface DrawerProps extends ComponentProps<typeof DrawerFromLibUi> {}

export const Drawer = ({ ...props }: DrawerProps) => <DrawerFromLibUi {...props} />;

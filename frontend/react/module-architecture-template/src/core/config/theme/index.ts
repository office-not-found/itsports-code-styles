import { createTheme } from "@mantine/core";
import { colors } from "./colors";

import "./index.scss";

export const theme = createTheme({
    fontFamily: "Formular, sans-serif",
    defaultRadius: "md",
    primaryColor: "accent",
    colors
});

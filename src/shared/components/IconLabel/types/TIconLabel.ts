import { TypographyProps } from "@mui/material";
import { ReactNode } from "react";

export type TIconLabelProps = {
    text: string;
    icon: ReactNode;
} & TypographyProps;

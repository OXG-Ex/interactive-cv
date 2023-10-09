import { TypographyProps } from '@mui/material';
import { ReactNode } from 'react';

export type TIconLinkProps = {
    text: string;
    icon: ReactNode;
    href?: string;
} & TypographyProps;

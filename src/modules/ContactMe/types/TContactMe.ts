import { ReactNode } from 'react';

export type TContactInfo = {
    icon: ReactNode;
    title: string;
    info: string;
};

export type TContactMeProps = {
    contacts: TContactInfo[];
};

import { TextFieldProps } from '@mui/material';
import { TContactFormData } from '../../../types/TContactForm';
import { Control } from 'react-hook-form';

export type TFormInputProps = {
    name: keyof TContactFormData;
    control: Control<TContactFormData>;
} & TextFieldProps;

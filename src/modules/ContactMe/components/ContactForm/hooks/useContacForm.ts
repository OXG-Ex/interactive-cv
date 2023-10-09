import { useForm, SubmitHandler } from 'react-hook-form';
import { TContactFormData } from '../types/TContactForm';

export const useContactForm = () => {
    const { control, handleSubmit } = useForm<TContactFormData>();

    const onSubmit: SubmitHandler<TContactFormData> = (data) => console.log(data);

    return { onSubmit, control, handleSubmit };
};

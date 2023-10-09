import { Button, Stack } from '@mui/material';
import { useContactForm } from '../hooks/useContacForm';
import { FormInput } from '../components';

const ContactForm: React.FC = () => {
    const { handleSubmit, onSubmit, control } = useContactForm();

    return (
        <Stack component="form" onSubmit={handleSubmit(onSubmit)} gap={2} width={'100%'}>
            <FormInput control={control} name="firstName" label="Имя" />
            <FormInput control={control} name="lastName" label="Фамилия" />
            <FormInput control={control} name="email" label="Email" />
            <FormInput control={control} multiline rows={5} name="message" label="Сообщение" />
            <Button type="submit" variant="outlined">
                Отправить
            </Button>
        </Stack>
    );
};

export default ContactForm;

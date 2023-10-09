import { useController } from 'react-hook-form';
import { TFormInputProps } from '../types/TFormInput';
import { TextField } from '@mui/material';

const FormInput: React.FC<TFormInputProps> = (props) => {
    const { control, name, ...textFieldProps } = props;

    const {
        field,
        fieldState: { error },
    } = useController({
        control,
        name,
        rules: { required: 'Это обязаельное поле' },
    });

    return (
        <TextField
            {...field}
            error={Boolean(error)}
            helperText={error?.message}
            {...textFieldProps}
        />
    );
};

export default FormInput;

import { Grid, Typography, Stack } from '@mui/material';
import { TContactMeProps } from '../types/TContactMe';
import { useContactMe } from '../hooks/useContactMe';
import { ContactForm } from '../components';

const ContactMe: React.FC<TContactMeProps> = (props) => {
    const { contactCards } = useContactMe(props);
    return (
        <Stack gap={2}>
            <Typography variant="h3" textAlign={'center'}>
                Контакты
            </Typography>
            <Grid container spacing={2} p={2}>
                <Grid item md={6} sm={12}>
                    <Stack width={'100%'} gap={2}>
                        {contactCards}
                    </Stack>
                </Grid>
                <Grid item md={6} sm={12}>
                    <ContactForm />
                </Grid>
            </Grid>
        </Stack>
    );
};

export default ContactMe;

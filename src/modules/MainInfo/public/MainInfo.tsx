import { Chip, Grid, Stack, Typography } from '@mui/material';
import { TMainInfoProps } from '../types/TMainInfo';
import { useTypingAnimation } from '../../../shared/hooks/useTypingAnimation';
import { IconLink } from '../../../shared/components';
import { EmailOutlined, LocationOnOutlined, PhoneOutlined } from '@mui/icons-material';
import { ContactMeButtons, UserPhoto } from '../components';

const MainInfo: React.FC<TMainInfoProps> = (props) => {
    const { avatarUrl, fullName } = props;
    const { currentText } = useTypingAnimation(fullName);
    return (
        <Grid container spacing={2} p={2}>
            <Grid
                item
                md={6}
                sm={12}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Stack gap={2} width="100%">
                    <Chip
                        color="primary"
                        label="Здравствуйте, я"
                        variant="outlined"
                        sx={{ borderBottomLeftRadius: 0, fontSize: '16px', width: 'fit-content' }}
                    />
                    <Stack gap={1}>
                        <Typography variant="h2">{currentText}</Typography>
                        <Typography variant="h4" color="primary">
                            {'Учитель начальных классов'}
                        </Typography>
                    </Stack>

                    <Stack gap={1} mt={2}>
                        <IconLink
                            icon={<EmailOutlined />}
                            text={'Tymanovaanikeeva@mail.ru'}
                            href="mailto:Tymanovaanikeeva@mail.ru"
                        />
                        <IconLink
                            icon={<PhoneOutlined />}
                            text={'8-(952)-604-35-52'}
                            href="tel:89526043552"
                        />
                        <IconLink
                            icon={<LocationOnOutlined />}
                            text={'г. Азов, 346787, РФ'}
                            href="https://maps.app.goo.gl/bVFNxRVEubLUJGnL9"
                        />
                    </Stack>
                    <ContactMeButtons />
                </Stack>
            </Grid>
            <Grid
                item
                md={6}
                sm={12}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <UserPhoto avatarUrl={avatarUrl} />
            </Grid>
        </Grid>
    );
};

export default MainInfo;

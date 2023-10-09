import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { Download } from '@mui/icons-material';
import programmerBackground from '../../../assets/background/programmer.png';
import { Chips } from '../../../shared/components';

const AboutMe: React.FC = () => {
    return (
        <Grid container spacing={8}>
            <Grid
                item
                md={6}
                sm={12}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Box
                    component="img"
                    sx={{
                        maxHeight: 'auto',
                        maxWidth: '100%',
                    }}
                    alt="programmer art"
                    src={programmerBackground}
                />
            </Grid>
            <Grid
                item
                md={6}
                sm={12}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Stack gap={4}>
                    <Typography variant="h3">Обо мне</Typography>
                    <Typography variant="body1">
                        Здравствуйте, я Семён, веб-разработчик из России. У меня богатый опыт в
                        дизайне, создании и настройке веб-сайтов. Также я владею:
                    </Typography>
                    <Chips
                        items={['React', 'HTML', 'Less/SCSS/Sass', 'Javascript', 'Typescript']}
                    />
                    <Button
                        variant="outlined"
                        color="primary"
                        endIcon={<Download />}
                        href="/cv.pdf"
                        download
                    >
                        Скачать резюме
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default AboutMe;

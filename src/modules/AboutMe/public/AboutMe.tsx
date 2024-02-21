import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { Download } from '@mui/icons-material';
import programmerBackground from '../../../assets/background/teacher.png';

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
                    alt="teacher art"
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
                        Здравствуйте, меня зовут Дарья. Я учитель начальных классов с уклоном на
                        психолога. У меня есть опыт работы с детьми разных возрастов, так же опыт
                        работы с официальными документами.
                    </Typography>
                    {/* <Chips
                        items={['React', 'HTML', 'Less/SCSS/Sass', 'Javascript', 'Typescript']}
                    /> */}
                    <Button
                        variant="outlined"
                        color="primary"
                        endIcon={<Download />}
                        href={`${window.location}cv.pdf`}
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

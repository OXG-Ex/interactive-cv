import { Button, Stack, Typography } from '@mui/material';
import { Download } from '@mui/icons-material';
import { Chips } from '../../../shared/components';

const AboutMe: React.FC = () => {
    return (
        <Stack gap={4}>
            <Typography variant="h3">Обо мне</Typography>
            <Typography variant="body1">
                Здравствуйте, я Семён, веб-разработчик из России. У меня богатый опыт в дизайне,
                создании и настройке веб-сайтов. Также я владею:
            </Typography>
            <Chips items={['React', 'HTML', 'Less/SCSS/Sass', 'Javascript', 'Typescript']} />
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
    );
};

export default AboutMe;

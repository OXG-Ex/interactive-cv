import { Button, Stack, Typography } from "@mui/material";
import { SkillChips } from "../components";
import { Download } from "@mui/icons-material";


const AboutMe: React.FC = () => {
    return <Stack gap={4}>
        <Typography variant="h3">Обо мне</Typography>
        <Typography variant="body1">
            Здравствуйте, я Семён, веб-разработчик из России. У меня богатый опыт в дизайне, создании и настройке веб-сайтов. Также я владею:
        </Typography>
        <SkillChips skills={['React', 'HTML', 'Less/SCSS/Sass', 'Javascript', 'Typescript']} />
        <Button variant="outlined" color='primary' endIcon={<Download />} href="/cv.pdf" download>
            Скачать резюме
        </Button>
    </Stack>;
}

export default AboutMe;

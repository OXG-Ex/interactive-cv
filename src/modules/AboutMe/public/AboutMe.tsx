import { Stack, Typography } from "@mui/material";
import { SkillChips } from "../components";


const AboutMe: React.FC = () => {
    return <Stack gap={2}>
        <Typography variant="h3">Обо мне</Typography>
        <Typography variant="body2">Здравствуйте, я Семён, веб-разработчик из России. У меня богатый опыт в дизайне, создании и настройке веб-сайтов. Также я владею:</Typography>
        <SkillChips skills={['React', 'HTML', 'Less/SCSS/Sass', 'Javascript', 'Typescript']} />
    </Stack>;
}

export default AboutMe;

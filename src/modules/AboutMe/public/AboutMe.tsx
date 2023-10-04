import { Stack, Typography } from "@mui/material";
import { TAboutMeProps } from "../types/TAboutMe";


const AboutMe: React.FC<TAboutMeProps> = (props) => {
    const { aboutMeText, subTitle, title } = props;

    return <Stack>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h3">{subTitle}</Typography>
        <Typography variant='body1'>{aboutMeText}</Typography>
    </Stack>;
}

export default AboutMe;

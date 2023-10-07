import { Grid, Typography, Stack } from "@mui/material";
import { useEducationAndExperience } from "../hooks/useEducationAndExperience";
import { TEducationAndExperienceProps } from "../types/TEducationAndExperience";


const EducationAndExperience: React.FC<TEducationAndExperienceProps> = (props) => {
    const { educationCards, experienceCards } = useEducationAndExperience(props);

    return <Grid container spacing={2} p={2}>
        <Grid item md={6} sm={12} >
            <Typography variant="h3" textAlign={'center'} pb={2}>Образование</Typography>
            <Stack width={'100%'} gap={2}>
                {educationCards}
            </Stack>
        </Grid>
        <Grid item md={6} sm={12} >
            <Typography variant="h3" textAlign={'center'} pb={2}>Опыт работы</Typography>
            <Stack width={'100%'} gap={2}>
                {experienceCards}
            </Stack>
        </Grid>
    </Grid>;
}

export default EducationAndExperience;

import { Grid, Typography, Stack } from '@mui/material';
import { useEducationAndExperience } from '../hooks/useEducationAndExperience';
import { TEducationAndExperienceProps } from '../types/TEducationAndExperience';
import { Fade } from 'react-awesome-reveal';

const EducationAndExperience: React.FC<TEducationAndExperienceProps> = (props) => {
    const { educationCards, experienceCards } = useEducationAndExperience(props);

    return (
        <Grid container spacing={2} p={2}>
            <Grid item md={6} sm={12} width={'100%'}>
                <Typography variant="h3" textAlign={'center'} pb={2}>
                    Образование
                </Typography>
                <Stack width={'100%'} gap={2}>
                    <Fade direction="left" cascade damping={0.3} duration={500}>
                        {educationCards}
                    </Fade>
                </Stack>
            </Grid>
            <Grid item md={6} sm={12} width={'100%'}>
                <Typography variant="h3" textAlign={'center'} pb={2}>
                    Опыт работы
                </Typography>
                <Stack width={'100%'} gap={2}>
                    <Fade direction="right" cascade damping={0.3} duration={500}>
                        {experienceCards}
                    </Fade>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default EducationAndExperience;

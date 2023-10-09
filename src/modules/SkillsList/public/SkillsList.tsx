import { Box, Grid, Stack, Typography } from '@mui/material';
import { TSkillsListProps } from '../types/TSkillsList';
import { useSkillsList } from '../hooks/useSkillsList';
import { Fade } from 'react-awesome-reveal';

const SkillsList: React.FC<TSkillsListProps> = (props) => {
    const { hardSkills, softSkills } = useSkillsList(props);

    return (
        <Grid container spacing={2} p={2}>
            <Grid item md={6} sm={12} width={'100%'}>
                <Typography variant="h3" textAlign={'center'} pb={2}>
                    Технические навыки
                </Typography>
                <Stack width={'100%'} gap={2}>
                    <Fade direction="left" cascade damping={0.3} duration={500}>
                        {hardSkills}
                    </Fade>
                </Stack>
            </Grid>

            <Grid item md={6} sm={12} width={'100%'}>
                <Typography variant="h3" textAlign={'center'} pb={2}>
                    Профессиональные навыки
                </Typography>
                <Box
                    display={'grid'}
                    gap={2}
                    justifyContent={'space-evenly'}
                    sx={{ gridTemplateColumns: 'repeat(auto-fit, 125px);' }}
                >
                    <Fade direction="right" cascade damping={0.3} duration={500}>
                        {softSkills}
                    </Fade>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SkillsList;

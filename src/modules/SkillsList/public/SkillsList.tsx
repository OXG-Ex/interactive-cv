import { Grid, Stack, Typography } from "@mui/material";
import { TSkillsListProps } from "../types/TSkillsList";
import { useSkillsList } from "../hooks/useSkillsList";

const SkillsList: React.FC<TSkillsListProps> = (props) => {
    const { hardSkills, softSkills } = useSkillsList(props);

    return <Grid container spacing={2} p={2}>
        <Grid item md={6} sm={12} >
            <Typography variant="h3" textAlign={'center'} pb={2}>Технические навыки</Typography>
            <Stack width={'100%'} gap={2}>
                {hardSkills}
            </Stack>
        </Grid>
        <Grid item md={6} sm={12} >
            <Typography variant="h3" textAlign={'center'} pb={2}>Профессиональные навыки</Typography>
            <Stack gap={4} direction="row" width={'100%'} justifyContent={'space-between'} >
                {softSkills}
            </Stack>
        </Grid>
    </Grid>;
}

export default SkillsList;

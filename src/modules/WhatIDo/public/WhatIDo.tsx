import { AssignmentInd, AutoStories, CameraOutdoor } from '@mui/icons-material';
import { Grid, Stack, Typography } from '@mui/material';
import { Card } from '../components';

const WhatIDo: React.FC = () => {
    return (
        <Stack gap={2} alignItems={'center'}>
            <Typography variant="h3">Чем я могу заниматься</Typography>
            <Grid container spacing={2}>
                <Grid item sm={12} md={4} width="fill-available">
                    <Card
                        icon={<AssignmentInd color="error" fontSize="large" />}
                        title="Учитель"
                        text="Учитель начальных классов. Организация урочной, внеурочной и проектной деятельности учащихся"
                    />
                </Grid>
                <Grid item sm={12} md={4} width="fill-available">
                    <Card
                        icon={<AutoStories color="primary" fontSize="large" />}
                        title="Репетитор"
                        text="Работа со школьниками младших классов по развитию мышления, знаний, умений и навыков"
                    />
                </Grid>
                <Grid item sm={12} md={4} width="fill-available">
                    <Card
                        icon={<CameraOutdoor color="secondary" fontSize="large" />}
                        title="Онлайн обучение"
                        text="Занятия со школьниками младших классов в онлайн режиме. Развитие личностных качеств и критического мышления"
                    />
                </Grid>
            </Grid>
        </Stack>
    );
};

export default WhatIDo;

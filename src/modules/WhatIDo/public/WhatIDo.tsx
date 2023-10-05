import { DeveloperMode, Html, Terminal } from "@mui/icons-material";
import { Grid, Stack, Typography, } from "@mui/material";
import { Card } from "../components";

const WhatIDo: React.FC = () => {
    return <Stack gap={2} alignItems={'center'}>
        <Typography variant="h3">Чем я занимаюсь</Typography>
        <Grid container spacing={2}>
            <Grid item sm={12} md={4} width="inherit">
                <Card icon={<DeveloperMode color="error" fontSize="large" />} title="Мобильная разработка" text='Мобилки_Мобилки_Мобилки_Мобилки_Мобилки_Мобилки_Мобилки_Мобилки_' />
            </Grid>
            <Grid item sm={12} md={4} width="inherit" >
                <Card icon={<Html color="primary" fontSize="large" />} title="Веб-разработка" text='САЙТЫ_САЙТЫ_САЙТЫ_САЙТЫ_САЙТЫ_САЙТЫ_САЙТЫ_САЙТЫ_САЙТЫ_' />
            </Grid>
            <Grid item sm={12} md={4} width="inherit">
                <Card icon={<Terminal color="secondary" fontSize="large" />} title="Десктопная разработка" text='ДЕСКТОП_ДЕСКТОП_ДЕСКТОП_ДЕСКТОП_ДЕСКТОП_ДЕСКТОП_ДЕСКТОП_ДЕСКТОП__' />
            </Grid>
        </Grid>
    </Stack>;
}

export default WhatIDo;

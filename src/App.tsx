
import { useTranslation } from 'i18nano';
import { Box, Grid, Stack } from '@mui/material';
import { StyledBackgroundContainer } from './shared/styled';
import backgroundImage from "./assets/background/background_1.jpg";
import { AboutMe, MainInfo, UserPhoto } from './modules';

import './main.css';


function App() {
  const translate = useTranslation();

  return (
    <Stack gap={4}>
      <StyledBackgroundContainer backgroundImage={backgroundImage}>
        <Grid container spacing={2} p={2}>
          <Grid item md={6} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <MainInfo />
          </Grid>
          <Grid item md={6} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <UserPhoto avatarUrl='/avatar/Avatar.jpg' avatarAltText='Semyon Nazarenko' />
          </Grid>
        </Grid>
      </StyledBackgroundContainer>

      <Grid container spacing={2} p={2}>
        <Grid item md={6} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Box
            component="img"
            sx={{
              maxHeight: "auto",
              maxWidth: "100%",
            }}
            alt="programmer art"
            src="/programmer.png"
          />
        </Grid>
        <Grid item md={6} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <AboutMe />
        </Grid>
      </Grid>
    </Stack >
  )
}

export default App

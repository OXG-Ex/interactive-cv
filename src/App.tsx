
import { Box, Container, Grid, Stack } from '@mui/material';
import { StyledBackgroundContainer } from './shared/styled';
import backgroundImage from "./assets/background/background_1.jpg";
import { AboutMe, MainInfo, UserPhoto, WhatIDo } from './modules';

import './main.css';


function App() {
  return (
    <Stack gap={12}>

      <StyledBackgroundContainer backgroundImage={backgroundImage}>
        <Container maxWidth="lg">
          <Grid container spacing={2} p={2}>
            <Grid item md={6} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
              <MainInfo />
            </Grid>
            <Grid item md={6} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
              <UserPhoto avatarUrl='/avatar/Avatar.jpg' avatarAltText='Semyon Nazarenko' />
            </Grid>
          </Grid>
        </Container>
      </StyledBackgroundContainer>

      <Container maxWidth="lg">
        <Grid container spacing={8} >
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
      </Container>

      <Container maxWidth="lg">
        <WhatIDo />
      </Container>

    </Stack >
  )
}

export default App

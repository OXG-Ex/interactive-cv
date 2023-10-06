
import { Box, Container, Grid, Stack } from '@mui/material';
import { StyledBackgroundContainer } from './shared/styled';
import backgroundImage1 from "./assets/background/background_1.jpg";
import backgroundImage2 from "./assets/background/background_3.jpg";
import { AboutMe, MainInfo, UserPhoto, WhatIDo, ProjectsList } from './modules';

import './main.css';

function App() {
  return (
    <Stack gap={12}>

      <StyledBackgroundContainer backgroundImage={backgroundImage1}>
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

      <StyledBackgroundContainer backgroundImage={backgroundImage2}>
        <Container maxWidth="lg">
          <ProjectsList items={[
            {
              description: 'super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_',
              imageUrl: 'https://www.techwyse.com/wp-content/uploads/2013/09/static-vs-dinamic-url.jpg',
              link: 'https://github.com/Learus/react-material-ui-carousel',
              name: 'Super Project 1',
              area: 'desktop',
              tags: ['Html, Css', 'JS'],
              type: 'pet_project'
            },

            {
              description: 'super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_',
              imageUrl: 'https://mastersoftwaretesting.com/_next/image?url=%2Fblog%2Fstatic-testing-process.png&w=3840&q=75',
              link: 'https://github.com/Learus/react-material-ui-carousel',
              name: 'Super Project 2',
              tags: ['SuperLongTagSuperLongTagSuperLongTagSuperLongTag', 'Css-in-JS', 'Css-in-JS', 'Css-in-JS', 'Css-in-JS', 'Css-in-JS', 'JS'],
              type: 'commercial'
            },


            {
              description: 'super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_',
              imageUrl: 'https://mastersoftwaretesting.com/_next/image?url=%2Fblog%2Fstatic-testing-vs-dynamic-testing.png&w=3840&q=75',
              link: 'https://github.com/Learus/react-material-ui-carousel',
              name: 'Super Project 3',
              area: 'mobile',
            }

          ]} />
        </Container>
      </StyledBackgroundContainer>

    </Stack >
  )
}

export default App


import UserPhoto from './modules/UserPhoto/public/UserPhoto';
import { useTranslation } from 'i18nano';

import './main.css';
import { Grid, Stack } from '@mui/material';
import MainInfo from './modules/MainInfo/public/MainInfo';

function App() {
  const translate = useTranslation();
  return (
    <Stack p={1} >
      <Grid container spacing={2}>
        <Grid item md={6} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <MainInfo />
        </Grid>
        <Grid item md={6} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <UserPhoto avatarUrl='../public/Avatar.jpg' avatarAltText='Semyon Nazarenko' technologiesUrls={[]} />
        </Grid>
      </Grid>


      {/* <AboutMe aboutMeText={translate('aboutMeText')} subTitle={translate('position')} title={translate('fullName')} /> */}
    </Stack >
  )
}

export default App

import { Container, Stack } from '@mui/material';
import { Fade, Slide } from 'react-awesome-reveal';
import { StyledBackgroundContainer } from './shared/styled';
import backgroundImage1 from './assets/background/background_1.jpg';
import backgroundImage2 from './assets/background/background_2.jpg';
import backgroundImage3 from './assets/background/background_3.jpg';
import mapBackground from './assets/background/map-color-overlay.png';
import avatar from './assets/avatar/Avatar.jpg';
import {
    AboutMe,
    MainInfo,
    WhatIDo,
    ProjectsList,
    SkillsList,
    EducationAndExperience,
    ContactMe,
} from './modules';
import { SkillType } from './modules/SkillsList/enums/SkillType';
import { AlternateEmail, LocalPhone, Telegram } from '@mui/icons-material';

function App() {
    return (
        <Stack gap={12}>
            <StyledBackgroundContainer applyDarkening backgroundImage={backgroundImage1}>
                <Fade duration={800}>
                    <Container maxWidth="lg">
                        <MainInfo avatarUrl={avatar} fullName="Назаренко Семён" />
                    </Container>
                </Fade>
            </StyledBackgroundContainer>

            <Slide direction="right">
                <Container maxWidth="lg">
                    <AboutMe />
                </Container>
            </Slide>

            <Container maxWidth="lg">
                <Fade direction="left">
                    <WhatIDo />
                </Fade>
            </Container>

            <StyledBackgroundContainer applyDarkening backgroundImage={backgroundImage2}>
                <Fade>
                    <Container maxWidth="lg">
                        <ProjectsList
                            items={[
                                {
                                    description:
                                        'super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_',
                                    imageUrl:
                                        'https://www.techwyse.com/wp-content/uploads/2013/09/static-vs-dinamic-url.jpg',
                                    link: 'https://github.com/Learus/react-material-ui-carousel',
                                    name: 'Super Project 1',
                                    area: 'desktop',
                                    tags: ['Html, Css', 'JS'],
                                    type: 'pet_project',
                                },

                                {
                                    description:
                                        'super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_',
                                    imageUrl:
                                        'https://mastersoftwaretesting.com/_next/image?url=%2Fblog%2Fstatic-testing-process.png&w=3840&q=75',
                                    link: 'https://github.com/Learus/react-material-ui-carousel',
                                    name: 'Super Project 2',
                                    tags: [
                                        'SuperLongTagSuperLongTagSuperLongTagSuperLongTag',
                                        'Css-in-JS1',
                                        'Css-in-JS2',
                                        'Css-in-JS3',
                                        'Css-in-JS4',
                                        'Css-in-JS5',
                                        'JS6',
                                    ],
                                    type: 'commercial',
                                },

                                {
                                    description:
                                        'super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_super Project_',
                                    imageUrl:
                                        'https://mastersoftwaretesting.com/_next/image?url=%2Fblog%2Fstatic-testing-vs-dynamic-testing.png&w=3840&q=75',
                                    link: 'https://github.com/Learus/react-material-ui-carousel',
                                    name: 'Super Project 3',
                                    area: 'mobile',
                                },
                            ]}
                        />
                    </Container>
                </Fade>
            </StyledBackgroundContainer>

            <Container maxWidth="lg">
                <SkillsList
                    skills={[
                        {
                            percent: 82,
                            title: 'Алкоголизм',
                            type: SkillType.Hard,
                        },
                        {
                            percent: 10,
                            title: 'Жадность до денег',
                            type: SkillType.Hard,
                        },
                        {
                            percent: 90,
                            title: 'Токсичность',
                            type: SkillType.Hard,
                        },
                        {
                            percent: 55.55555,
                            title: 'Шизофрения',
                            type: SkillType.Hard,
                        },
                        {
                            percent: 99,
                            title: 'Наследие 🤡',
                            type: SkillType.Hard,
                        },
                        {
                            percent: 80,
                            title: 'Самоуверенность',
                            type: SkillType.Soft,
                        },
                        {
                            percent: 42,
                            title: 'Работа в комманде',
                            type: SkillType.Soft,
                        },
                        {
                            percent: 90,
                            title: 'ЧСВ',
                            type: SkillType.Soft,
                        },
                    ]}
                />
            </Container>

            <StyledBackgroundContainer backgroundImage={backgroundImage3} applyDarkening>
                <Container maxWidth="lg">
                    <EducationAndExperience
                        education={[
                            {
                                description:
                                    'Шарага_Шарага_Шарага_Шарага_Шарага_Шарага_Шарага_Шарага_Шарага_Шарага_Шарага_Шарага_',
                                institution: 'ТИ (Филлиал) ДГТУ',
                                specialization: '09.02.03 ПКС',
                                years: '2017-2021',
                            },
                            {
                                description:
                                    'КУРСЫ_КУРСЫ_КУРСЫ_КУРСЫ_КУРСЫ_КУРСЫ_КУРСЫ_КУРСЫ_КУРСЫ_КУРСЫ_КУРСЫ_КУРСЫ_КУРСЫ_КУРСЫ_',
                                institution: '[ITVDN]',
                                specialization: 'React разработчик',
                                years: '2022',
                            },
                            {
                                description:
                                    'Вышка_Вышка_Вышка_Вышка_Вышка_Вышка_Вышка_Вышка_Вышка_Вышка_Вышка_Вышка_Вышка_Вышка_Вышка_',
                                institution: 'ТИ (Филлиал) ДГТУ ',
                                specialization: '09.03.02 ВТиП',
                                years: '2021-2025',
                            },
                        ]}
                        experience={[
                            {
                                companyName: '7pace',
                                position: 'FullStack-dev',
                                responsibilities: ['make', 'some', 'noize'],
                                years: '2020-2023',
                                country: 'GE',
                            },
                            {
                                companyName: 'Sveak',
                                position: 'Frontend-dev',
                                responsibilities: ['make', 'some', 'noize'],
                                years: 'апрель 2023 -  октябрь 2023',
                                country: 'RU',
                            },
                        ]}
                    />
                </Container>
            </StyledBackgroundContainer>

            <StyledBackgroundContainer
                backgroundImage={mapBackground}
                sx={{ backgroundSize: 'contain' }}
            >
                <Container maxWidth="lg">
                    <ContactMe
                        contacts={[
                            { icon: <Telegram />, info: '@oxgex', title: 'Telegram' },
                            {
                                icon: <AlternateEmail />,
                                info: 'semes212@gamil.com',
                                title: 'Email',
                            },
                            {
                                icon: <LocalPhone />,
                                info: '8-(999)-690-17-59',
                                title: 'Телефон',
                            },
                        ]}
                    />
                </Container>
            </StyledBackgroundContainer>

            <div></div>
        </Stack>
    );
}

export default App;

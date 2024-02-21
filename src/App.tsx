import { Container, Stack } from '@mui/material';
import { Fade, Slide } from 'react-awesome-reveal';
import { StyledBackgroundContainer } from './shared/styled';
import backgroundImage1 from './assets/background/bg1.jpg';
import backgroundImage2 from './assets/background/bg2.jpg';
import backgroundImage3 from './assets/background/bg3.jpg';
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
                        <MainInfo avatarUrl={avatar} fullName="Аникеева Дарья Витальевна" />
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
                            projects={[
                                {
                                    description:
                                        'Проблема формирования словаря является одной из самых актуальных проблем современного образования. Хорошая речь – важнейшее условие всестороннего полноценного развития детей. Чем богаче и правильнее речь ребенка, тем легче ему высказать свои мысли, тем шире его возможности в познании окружающей действительности, содержательнее и полноценнее отношения со сверстниками и взрослыми, тем активнее осуществляется его психическое развитие.',
                                    imageUrl: `${window.location}first-project.jpg`,
                                    link: `${window.location}kursovaya.docx`,
                                    name: 'Обогащение лексического запаса младших школьников средствами учебных словарей',
                                    area: 'Курсовая работа',
                                    tags: ['Учебная работа', 'Исследование'],
                                    // type: 'Курсовая работа',
                                },
                                {
                                    description:
                                        'Коллектив в начальных классах играет очень важную роль в процессе обучения и развития детей. Дети только начинают учиться взаимодействовать с другими людьми. Коллектив помогает им развивать социальные навыки, такие как общение, сотрудничество, умение слушать и уважать других. Так же создает благоприятную учебную среду, где дети могут учиться друг у друга, делиться знаниями и опытом. Это помогает им лучше усваивать материал и развивать свои навыки. Необходимо, что бы педагоги знали данную информацию и учитывали её при работе с младшими школьниками.',
                                    imageUrl: `${window.location}second-project.jpg`,
                                    // link: 'https://github.com/Learus/react-material-ui-carousel',
                                    name: 'Организация коллектива в начальных классах',
                                    area: 'Тренинг для студентов',
                                    tags: ['Тренинг'],
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
                            percent: 50,
                            title: 'Работа с документами',
                            type: SkillType.Hard,
                        },
                        {
                            percent: 75,
                            title: 'Знание ФГОС и СанПин',
                            type: SkillType.Hard,
                        },
                        {
                            percent: 90,
                            title: 'Cистемное обучение',
                            type: SkillType.Hard,
                        },
                        {
                            percent: 80,
                            title: 'Детская психология',
                            type: SkillType.Hard,
                        },
                        {
                            percent: 77,
                            title: 'Детская социализация',
                            type: SkillType.Hard,
                        },
                        {
                            percent: 92,
                            title: 'Любовь к детям',
                            type: SkillType.Soft,
                        },
                        {
                            percent: 95,
                            title: 'Ответственность',
                            type: SkillType.Soft,
                        },
                        {
                            percent: 90,
                            title: 'Пунктуальность',
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
                                    'Педагогическое образование включает в себя изучение педагогических теорий, методик обучения, психологии обучения, а также практические навыки, необходимые для работы в образовательной сфере.',
                                institution: 'ГБПОУ РО ДПК филиал в г. Азове',
                                specialization: '44.02.02 Учитель начальных классов',
                                years: '2020-2024',
                            },
                            {
                                description:
                                    'Психологическое образование в педагогике помогает будущим педагогам лучше понимать поведение и мотивацию учащихся, эффективно общаться с ними, создавать благоприятную учебную среду и решать возможные проблемы в обучении.',
                                institution: 'ГБПОУ РО ДПК филиал в городе Азове',
                                specialization: 'Возрастная психология',
                                years: '2021-2024',
                            },
                        ]}
                        experience={[
                            {
                                companyName: 'МБОУ СОШ 15 г. АЗОВ',
                                position: 'Учитель начальных классов',
                                responsibilities: [
                                    'Проведение внеурочных занятий ',
                                    'Проведение уроков и мероприятий в начальных классах',
                                ],
                                years: '2021-2023',
                            },
                            {
                                companyName: 'ДОЦ "Дмитриадовский',
                                position: 'Вожатый',
                                responsibilities: [
                                    'Работа с детьми различного возраста',
                                    'Полная ответственность за жизнь и деятельность детей',
                                    'Организация и проведение мероприятий',
                                    'Полная системная работа с детьми',
                                ],
                                years: 'июнь 2023 - август 2023',
                            },
                            {
                                position: 'Ведущий аниматор детских праздников',
                                responsibilities: [
                                    'Организация детских праздников',
                                    'Проведение мастер классов',
                                ],
                                years: 'май 2021 - январь 2023',
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
                            { icon: <Telegram />, info: '@Tyman_AD', title: 'Telegram' },
                            {
                                icon: <AlternateEmail />,
                                info: 'Tymanovaanikeeva@mail.ru',
                                title: 'Email',
                            },
                            {
                                icon: <LocalPhone />,
                                info: '8-(952)-604-35-52',
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

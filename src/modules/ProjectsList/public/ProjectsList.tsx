import Carousel from 'react-material-ui-carousel';
import { TProjectsListProps } from '../types/TProjectsList';
import { ProjectItem } from '../components';
import { Box, Stack, Typography } from '@mui/material';

const ProjectsList: React.FC<TProjectsListProps> = (props) => {
    const { projects } = props;
    return (
        <Stack alignItems="center" gap={4} p={2}>
            <Typography variant="h3">Мои проекты</Typography>
            <Box width={'100%'}>
                <Carousel animation="slide" stopAutoPlayOnHover fullHeightHover autoPlay={false}>
                    {projects.map((item) => (
                        <ProjectItem {...item} key={item.name} />
                    ))}
                </Carousel>
            </Box>
        </Stack>
    );
};

export default ProjectsList;

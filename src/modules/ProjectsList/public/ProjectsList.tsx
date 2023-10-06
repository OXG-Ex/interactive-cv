import Carousel from "react-material-ui-carousel";
import { TProjectsListProps } from "../types/TProjectsList";
import { ProjectItem } from "../components";
import { Box, Stack, Typography } from "@mui/material";


const ProjectsList: React.FC<TProjectsListProps> = (props) => {
    const { items } = props;
    return <Stack alignItems='center' gap={4} p={2}>
        <Typography variant="h4">
            Мои проекты
        </Typography>
        <Box width={'100%'}>
            <Carousel animation="slide" autoPlay={false} stopAutoPlayOnHover fullHeightHover >
                {
                    items.map((item) => <ProjectItem item={item} />)
                }
            </Carousel>
        </Box>

    </Stack>;
}

export default ProjectsList;

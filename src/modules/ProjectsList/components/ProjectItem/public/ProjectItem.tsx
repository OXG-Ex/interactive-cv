import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { TProjectItemProps } from '../types/TProjectItem';
import { GitHub } from '@mui/icons-material';
import { Chips } from '../../../../../shared/components';
import { getProjectTypeTitle, getProjectAreaTitle } from '../helpers';

const ProjectItem: React.FC<TProjectItemProps> = ({ item }) => {
    const { description, imageUrl, link, name, area, tags, type } = item;

    return (
        <Grid container spacing={3}>
            <Grid item sm={12} md={6}>
                <Box
                    component="img"
                    sx={{
                        maxHeight: 'auto',
                        maxWidth: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                    alt={`project ${name} screenshot`}
                    src={imageUrl}
                ></Box>
            </Grid>
            <Grid item sm={12} md={6}>
                <Stack gap={2}>
                    {area && (
                        <Typography variant="h5" color="primary.main" fontWeight={600}>
                            {getProjectAreaTitle(area)}
                        </Typography>
                    )}
                    <Typography variant="h3">{name}</Typography>
                    {type && <Typography variant="h5">{getProjectTypeTitle(type)}</Typography>}
                    <Typography paragraph>{description}</Typography>
                    {tags?.length && <Chips items={tags} variant="filled" />}
                    <Button
                        variant="outlined"
                        color="primary"
                        endIcon={<GitHub />}
                        href={link}
                        target="_blank"
                    >
                        GitHub
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default ProjectItem;

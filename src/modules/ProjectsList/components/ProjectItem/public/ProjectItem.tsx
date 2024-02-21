import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { Chips } from '../../../../../shared/components';
import { TProject } from '../../../types/TProjectsList';

const ProjectItem: React.FC<TProject> = (props) => {
    const { description, imageUrl, link, name, area, tags, type } = props;

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
                            {area}
                        </Typography>
                    )}
                    <Typography variant="h5">{name}</Typography>
                    {type && <Typography variant="h5">{type}</Typography>}
                    <Typography paragraph>{description}</Typography>
                    {tags?.length && <Chips items={tags} variant="filled" />}
                    {link ? (
                        <Button
                            variant="outlined"
                            color="primary"
                            // endIcon={<GitHub />}
                            href={link}
                            target="_blank"
                        >
                            Ссылка
                        </Button>
                    ) : (
                        <></>
                    )}
                </Stack>
            </Grid>
        </Grid>
    );
};

export default ProjectItem;

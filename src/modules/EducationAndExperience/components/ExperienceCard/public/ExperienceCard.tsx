import {
    Card,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
} from '@mui/material';
import { TExperienceInfo } from '../../../types/TEducationAndExperience';
import { ArrowForwardIos } from '@mui/icons-material';

const ExperienceCard: React.FC<TExperienceInfo> = (props) => {
    const { companyName, position, responsibilities, years } = props;
    return (
        <Card sx={{ height: '100%' }} elevation={8}>
            <CardContent>
                <Stack direction={'row'} justifyContent={'space-between'} gap={1}>
                    <Typography variant="h5">{`${position}`}</Typography>
                    {companyName ? (
                        <Typography variant="h5" color="primary.main" fontFamily={'cursive'}>
                            {companyName}
                        </Typography>
                    ) : (
                        <></>
                    )}
                </Stack>

                <Typography variant="body1" color="primary.main">
                    {years}
                </Typography>
                <Typography variant="h6">Обязанности:</Typography>
                <List dense disablePadding>
                    {responsibilities.map((responsibility) => (
                        <ListItem sx={{ pl: 0 }} key={responsibility}>
                            <ListItemIcon sx={{ minWidth: 24 }}>
                                <ArrowForwardIos />
                            </ListItemIcon>
                            <ListItemText primary={responsibility} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default ExperienceCard;

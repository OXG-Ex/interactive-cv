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
    const { companyName, position, responsibilities, years, country } = props;
    return (
        <Card sx={{ height: '100%' }} elevation={1}>
            <CardContent>
                <Stack direction={'row'} gap={1}>
                    <Typography variant="h5">{`${position} в компании`}</Typography>
                    <Typography variant="h5" color="primary.main" fontFamily={'cursive'}>
                        {companyName}
                    </Typography>
                    <Typography variant="body2" color="secondary.main">{`(${country})`}</Typography>
                </Stack>
                <Typography variant="body1" color="primary.main">
                    {years}
                </Typography>
                <Typography variant="h6">Обязанности:</Typography>
                <List dense disablePadding>
                    {responsibilities.map((resposibility) => (
                        <ListItem sx={{ pl: 0 }}>
                            <ListItemIcon sx={{ minWidth: 24 }}>
                                <ArrowForwardIos />
                            </ListItemIcon>
                            <ListItemText primary={resposibility} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default ExperienceCard;

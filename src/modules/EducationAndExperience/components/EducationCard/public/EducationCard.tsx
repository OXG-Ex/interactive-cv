import { Card, CardContent, Typography } from '@mui/material';
import { TEducationInfo } from '../../../types/TEducationAndExperience';

const EducationCard: React.FC<TEducationInfo> = (props) => {
    const { description, institution, specialization, years } = props;
    return (
        <Card sx={{ height: '100%' }} elevation={1}>
            <CardContent>
                <Typography variant="h5" paragraph mb={0}>
                    {`${specialization} в `}
                    <Typography
                        variant="h5"
                        component="span"
                        color="primary.main"
                        fontFamily={'cursive'}
                    >
                        {institution}
                    </Typography>
                </Typography>
                <Typography variant="body1" color="primary.main">
                    {years}
                </Typography>
                <Typography variant="body1" sx={{ overflowWrap: 'break-word' }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default EducationCard;

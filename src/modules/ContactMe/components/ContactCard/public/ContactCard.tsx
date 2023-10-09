import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { TContactInfo } from '../../../types/TContactMe';

const ContactCard: React.FC<TContactInfo> = (props) => {
    const { icon, info, title } = props;

    return (
        <Card sx={{ height: '100%' }} elevation={8}>
            <CardContent>
                <Stack direction="row" gap={2}>
                    <Box
                        display={'flex'}
                        p={2}
                        sx={{
                            borderRadius: '50%',
                            border: '4px solid',
                            borderColor: 'primary.main',
                        }}
                    >
                        {icon}
                    </Box>

                    <Stack>
                        <Typography variant="h5">{title}</Typography>
                        <Typography variant="body1" sx={{ overflowWrap: 'break-word' }}>
                            {info}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default ContactCard;

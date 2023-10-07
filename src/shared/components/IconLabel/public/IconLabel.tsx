import { Stack, Typography } from '@mui/material';
import { TIconLabelProps } from '../types/TIconLabel';

const IconLabel: React.FC<TIconLabelProps> = (props) => {
    const { text, icon, ...typographyProps } = props;

    return (
        <Stack
            direction={'row'}
            gap={1}
            alignItems={'center'}
            sx={{ '&:hover': { color: 'primary.main' } }}
        >
            {icon} <Typography {...typographyProps}>{text}</Typography>{' '}
        </Stack>
    );
};

export default IconLabel;

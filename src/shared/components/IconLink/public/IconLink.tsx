import { Link, Stack } from '@mui/material';
import { TIconLinkProps } from '../types/TIconLink';

const IconLink: React.FC<TIconLinkProps> = (props) => {
    const { text, icon, href, ...typographyProps } = props;

    return (
        <Stack
            direction={'row'}
            gap={1}
            alignItems={'center'}
            sx={{ '&:hover': { color: 'primary.main' } }}
        >
            {icon}
            <Link component="a" {...typographyProps} color="inherit" underline="none" href={href}>
                {text}
            </Link>
        </Stack>
    );
};

export default IconLink;

import { Paper, styled } from '@mui/material';
import { TStyledBackgroundContainerProps } from '../types/TStyledBackgroundContainer';

const StyledBackgroundContainer = styled(Paper, {
    shouldForwardProp: (propName) =>
        propName !== 'backgroundImage' && propName !== 'applyDarkening',
})<TStyledBackgroundContainerProps>(({ backgroundImage, applyDarkening = false }) => ({
    backgroundImage: `${
        applyDarkening ? 'linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3) ),' : ''
    } url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
}));

export default StyledBackgroundContainer;

import { GitHub, LinkedIn, Telegram } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';

const ContactMeButtons: React.FC = () => (
    <Stack direction="row" gap={1}>
        <IconButton href="https://t.me/oxgex" target="_blank" size="large">
            <Telegram />
        </IconButton>
        <IconButton href="https://github.com/OXG-Ex/interactive-cv" target="_blank" size="large">
            <GitHub />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/oxg-ex/" target="_blank" size="large">
            <LinkedIn />
        </IconButton>
    </Stack>
);

export default ContactMeButtons;

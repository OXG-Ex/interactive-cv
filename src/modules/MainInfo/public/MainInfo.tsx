import { Chip, Stack, Typography } from "@mui/material";
import { TMainInfoProps } from "../types/TMainInfo";
import { useTypingAnimation } from "../../../shared/hooks/useTypingAnimation";
import { IconLabel } from "../../../shared/components";
import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";

const MainInfo: React.FC<TMainInfoProps> = () => {

    const { currentText } = useTypingAnimation('Назаренко Семён')
    return <Stack gap={1}>
        <Chip color="primary" label="Привет, я" variant="outlined" sx={{ borderBottomLeftRadius: 0, fontSize: '16px', width: 'fit-content' }} />
        <Typography variant="h2">{currentText}</Typography>
        <Typography variant="h3" color="primary">{'< React-разработчик />'}</Typography>

        <IconLabel icon={<EmailOutlined />} text={'semes212@gmail.com'} />
        <IconLabel icon={<PhoneOutlined />} text={'8-(999)-690-17-59'} />
        <IconLabel icon={<EmailOutlined />} text={'semes212@gmail.com'} />

    </Stack>;
}

export default MainInfo;

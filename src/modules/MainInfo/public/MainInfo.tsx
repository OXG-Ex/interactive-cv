import { Chip, Stack, Typography } from "@mui/material";
import { TMainInfoProps } from "../types/TMainInfo";
import { useTypingAnimation } from "../../../shared/hooks/useTypingAnimation";
import { IconLabel } from "../../../shared/components";
import { EmailOutlined, LocationOnOutlined, PhoneOutlined } from "@mui/icons-material";
import { ContactMeButtons } from "../components";

const MainInfo: React.FC<TMainInfoProps> = () => {

    const { currentText } = useTypingAnimation('Назаренко Семён')
    return <Stack gap={2}>
        <Chip color="primary" label="Привет, я" variant="outlined" sx={{ borderBottomLeftRadius: 0, fontSize: '16px', width: 'fit-content' }} />
        <Stack gap={1}>
            <Typography variant="h2">{currentText}</Typography>
            <Typography variant="h4" color="primary">{'< React-разработчик />'}</Typography>
        </Stack>

        <Stack gap={1} mt={2}>
            <IconLabel icon={<EmailOutlined />} text={'semes212@gmail.com'} />
            <IconLabel icon={<PhoneOutlined />} text={'8-(999)-690-17-59'} />
            <IconLabel icon={<LocationOnOutlined />} text={'г. Ростов-на-Дону, 346787, РФ'} />
        </Stack>

        <ContactMeButtons />

    </Stack>;
}

export default MainInfo;

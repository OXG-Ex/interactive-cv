import { Avatar, Box } from "@mui/material";
import { TUserPhotoProps } from "../types/TUserPhoto";

const UserPhoto: React.FC<TUserPhotoProps> = (props) => {
    const { avatarAltText, avatarUrl } = props;

    return <Box p={2} sx={{ borderRadius: '50%', border: '4px solid', borderColor: 'primary.main' }}>
        <Avatar alt={avatarAltText} src={avatarUrl} sx={{ maxWidth: 400, height: 'auto', width: '100%' }} />
    </Box>
}

export default UserPhoto;

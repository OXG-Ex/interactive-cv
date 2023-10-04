import { Avatar, Badge } from "@mui/material";
import { TUserPhotoProps } from "../types/TUserPhoto";
import { useUserAvatar } from "../hooks/useUserPhoto";

const UserPhoto: React.FC<TUserPhotoProps> = (props) => {
    const { avatarAltText, avatarUrl } = props;
    // const { technologyUrl } = useUserAvatar(technologiesUrls);

    return <Avatar alt={avatarAltText} src={avatarUrl} sx={{ width: 560, height: 560 }} />

    //  <Badge
    //     overlap="circular"
    //     anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    // // badgeContent={
    // //     // <Avatar alt=": (" variant="square" src={technologyUrl} sx={{ width: 170, height: 170, animation: 'fade 3s linear infinite', animationDelay: '1.5s' }} imgProps={{ sx: { objectFit: "fill", } }} />
    // // }
    // >
    {/* </Badge>; */ }
}

export default UserPhoto;

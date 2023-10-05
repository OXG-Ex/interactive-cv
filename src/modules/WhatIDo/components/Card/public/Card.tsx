import { CardContent, Typography, Card as MuiCard } from "@mui/material";
import { TCardProps } from "../types/TCard";


const Card: React.FC<TCardProps> = (props) => {
    const { icon, text, title } = props;
    return <MuiCard sx={{ width: 'auto', height: '100%' }} elevation={2}>
        <CardContent>
            {icon}
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body1" sx={{ overflowWrap: 'break-word' }}>{text}</Typography>
        </CardContent>
    </MuiCard>;
}

export default Card;

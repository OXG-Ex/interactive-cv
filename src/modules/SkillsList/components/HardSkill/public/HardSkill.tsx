import { LinearProgress, Stack, Typography } from "@mui/material";
import { THardSkillProps } from "../types/THardSkill";

const HardSkill: React.FC<THardSkillProps> = ({ skill }) => {
    const { percent, title } = skill;

    return <Stack>
        <Stack direction='row' justifyContent={'space-between'}>
            <Typography variant='h5'>{title}</Typography>
            <Typography variant='h5'>{`${percent}%`}</Typography>
        </Stack>
        <LinearProgress value={percent} color="secondary" variant="determinate" />
    </Stack>;
}

export default HardSkill;

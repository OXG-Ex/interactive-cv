import { Chip, Stack } from "@mui/material";
import { TSkillChipsProps } from "../types/TSkillChips";

const SkillChips: React.FC<TSkillChipsProps> = ({ skills }) => {
    return <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        {skills.map(skill => <Chip label={skill} variant="outlined" color="info" />)}
    </Stack>;
};

export default SkillChips;

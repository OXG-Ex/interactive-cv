import { Chip, Stack } from '@mui/material';
import { TChipsProps } from '../types/TChips';

const Chips: React.FC<TChipsProps> = ({ items, ...chipProps }) => {
    return (
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
            {items.map((item) => (
                <Chip label={item} variant="outlined" color="info" key={item} {...chipProps} />
            ))}
        </Stack>
    );
};

export default Chips;

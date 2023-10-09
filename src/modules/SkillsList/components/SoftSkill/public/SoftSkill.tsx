import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { TSoftSkillProps } from '../types/TSoftSkill';

const SoftSkill: React.FC<TSoftSkillProps> = ({ skill }) => {
    const { percent, title } = skill;

    return (
        <Stack justifyContent={'center'} alignItems={'center'} gap={2}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                    value={percent}
                    color="primary"
                    size={125}
                    thickness={3}
                    variant="indeterminate"
                    sx={{
                        borderRadius: '100%',
                        boxShadow: 'inset 0 0 0px 8px #105f2f',
                        backgroundColor: 'transparent',
                    }}
                />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="h5">{`${percent}%`}</Typography>
                </Box>
            </Box>
            <Typography variant="h6" textAlign={'center'}>
                {title}
            </Typography>
        </Stack>
    );
};

export default SoftSkill;

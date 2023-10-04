import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0ede5e',
        },
        secondary: {
            main: '#0193fd',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    border: 0,
                    borderRadius: 3,
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    color: 'white',
                    height: 48,
                    padding: '0 30px',
                },
            }
        },

    },
    spacing: 8,
    typography: {
        fontFamily: 'Raleway',
    },
    shape: {
        borderRadius: 0,
    }
});

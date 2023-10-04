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
                    borderRadius: 24,
                    height: 48,
                    padding: '0 30px',
                    width: ' fit-content'
                },
                contained: {
                    border: 0,
                    boxShadow: ' 2px #0ede5e',
                    color: 'white',
                }
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

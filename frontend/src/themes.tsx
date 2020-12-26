import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            // light: will be calculated from palette.primary.main,
            main: 'rgba(255,196,0,1)',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            // light: '#0066ff',
            main: 'rgba(255,7,0,0)',
            // dark: will be calculated from palette.secondary.main,
            // contrastText: '#ffcc00',
        },
        //     // Used by `getContrastText()` to maximize the contrast between
        //     // the background and the text.
        //     contrastThreshold: 3,
        //     // Used by the functions below to shift a color's luminance by approximately
        //     // two indexes within its tonal palette.
        //     // E.g., shift from Red 500 to Red 300 or Red 700.
        //     tonalOffset: 0.2,
    },
});

export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            // light: will be calculated from palette.primary.main,
            main: 'rgba(255,196,0,1)',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            // light: '#0066ff',
            main: 'rgba(255,7,0,0)',
            // dark: will be calculated from palette.secondary.main,
            // contrastText: '#ffcc00',
        },
        // // Used by `getContrastText()` to maximize the contrast between
        // // the background and the text.
        // contrastThreshold: 3,
        // // Used by the functions below to shift a color's luminance by approximately
        // // two indexes within its tonal palette.
        // // E.g., shift from Red 500 to Red 300 or Red 700.
        // tonalOffset: 0.2,
    },
});


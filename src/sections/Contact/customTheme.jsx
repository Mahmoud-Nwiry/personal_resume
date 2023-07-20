import { createTheme } from "@mui/material";

export const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#FFFFFF88',
            '--TextField-brandBorderHoverColor': '#FFF',
            '--TextField-brandBorderFocusedColor': '#FFF',
            marginBottom : outerTheme.spacing(6),
            '& label': {
              color: 'var(--TextField-brandBorderColor)',
              fontWeight : 600,
              right: outerTheme.direction === 'rtl' ? 0 : 'unset',
              left: outerTheme.direction === 'rtl' ? 'unset' : 0,
              fontFamily : outerTheme.typography.fontFamily
            },
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
              position: 'absolute',
              right: outerTheme.direction === 'rtl' ? 0 : 'unset',
              left: outerTheme.direction === 'rtl' ? 'unset' : 0,
              top: 0,
              bottom : 0,
              transform : 'unset'
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            color : 'var(--TextField-brandBorderHoverColor)',
            '&:before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

import { createTheme } from "@mui/material";
import { teal } from "@mui/material/colors";


export let theme = createTheme({
    palette : {
        primary : {
            main : teal.A700,
            contrastText : '#fff'
        }
    },
    spacing : (factor) => factor * 5,
    direction : 'ltr',
    typography : {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    },
    components : {
        MuiPaper : {
            defaultProps : {
                style : {
                    borderRadius : 0,
                    boxShadow : "0 3px 10px rgba(0,0,0,0.1)",
                    display : 'block'
                }
            }
        },
        MuiButton : {
            defaultProps : {
                style : {
                    borderRadius : 0, 
                    textTransform : 'initial'
                }
            }
        },
        MuiContainer : {
            defaultProps : {
                style : {
                    margin : '0 60px', 
                    width : 'calc(100% - 120px)'
                }
            }
        },
        MuiIconButton : {
            defaultProps : {
                style : {
                    borderRadius : 0,
                    padding : '8px 16px'
                }
            }
        },
    }
})

export const darkTheme = createTheme(theme, {
    palette : {
        mode : 'dark',
        background: {
            default : "#010101",
            paper : '#222',
            paper2 : '#111',
            line : '#666',
            toTop : '#666'
        },
        text : {
            opacity : '#ccc',
            paragraph : '#ddd',
            main : '#eee',
            primary : '#fff'
        }
    }
})

export const lightTheme = createTheme(theme, {
    palette : {
        mode : 'light',
        background: {
            default : "#eee",
            paper : '#fff',
            paper2 : '#fff',
            line : '#eee',
            toTop : '#ccc'
        },
        text : {
            opacity : '#888',
            paragraph : '#666',
            main : '#333',
            primary : '#000'
        }
    }
})

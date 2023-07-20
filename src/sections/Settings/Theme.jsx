import React, { useContext } from 'react'
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import { Box, Stack, Typography } from '@mui/material';
import { DarkLightSwitch } from './Switch';
import { green, orange, purple, red, teal, grey, blue, brown } from '@mui/material/colors';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { ColorContext } from '../../contexts/ColorContext';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../contexts/LanguageContext';

const colorsObj =[
    {
        main : teal.A700,
        light : teal[400],
        dark : teal[700],
        contrastText : '#fff'
    },
    {
        main : blue[500],
        light : blue[200],
        dark : blue[800],
        contrastText : '#fff'
    },
    {
        main : red.A400,
        light : red.A100,
        dark : red[800],
        contrastText : '#fff'
    },
    {
        main : orange.A400,
        light : orange.A200,
        dark : orange[700],
        contrastText : '#fff'
    },
    {
        main : green.A700,
        light : green.A400,
        dark : green[800],
        contrastText : '#fff'
    },
    {
        main : purple.A700,
        light : purple.A100,
        dark : purple[800],
        contrastText : '#fff'
    },
    {
        main : brown[500],
        light : brown[200],
        dark : brown[800],
        contrastText : '#fff'
    },
    {
        main : grey.A700,
        light : grey[400],
        dark : grey[800],
        contrastText : '#fff'
    }
]

const Theme = () => {

    const {isDark, setIsDark} = useContext(DarkModeContext)
    const {color, setColor} = useContext(ColorContext)
    const {language} = useContext(LanguageContext)
    const {t} = useTranslation()


    const toggleDark = () => {
        localStorage.setItem('MN-Dark', !isDark)
        setIsDark(!isDark)
    }

    const addColor = (clr) => {
        localStorage.setItem('MN-Color', JSON.stringify({primary : clr}))
        setColor({primary : clr})
    }

  return (
    <Box p={4} borderBottom='1px solid' borderColor='background.toTop'>
        <Stack direction='row' textAlign='center'>
            <Typography sx={{display : 'flex', alignItems : 'center'}}>
                <PaletteOutlinedIcon color='primary' fontSize="medium"  />
            </Typography>
            <Typography variant='h6' mx={2}>{t('setting.theme')}</Typography>
        </Stack>

        <Stack direction='row' px={6} py={2} gap={2} alignItems='center' justifyContent='center' sx={{direction : 'ltr'}}>
            <Typography variant='body1'>{t('setting.light')}</Typography>
            <DarkLightSwitch checked={isDark} onClick={toggleDark} />
            <Typography variant='body1'>{t('setting.dark')}</Typography>
        </Stack>

        <Typography variant='body1' px={6} py={1}>{t('setting.colors')}</Typography>

        <Stack direction='row' pl={language === 'ar' ? 0 : 6} pr={language === 'ar' ? 6 : 0} py={2} gap={4} alignItems='center' flexWrap='wrap'>
        {
                colorsObj.map(clr => (
                    <Box
                        onClick={()=>{addColor(clr)}}
                        key={clr.main} 
                        width={40} 
                        height={30} 
                        className={color.primary.main === clr.main ? 'active' : ''}
                        sx={{
                            cursor : 'pointer', 
                            backgroundColor : clr.main,
                            '&.active' : {
                                border : '5px solid',
                                borderColor : 'text.primary'
                            }
                        }}
                    >

                    </Box>
                ))
            }
        </Stack>

    </Box>
  )
}

export default Theme
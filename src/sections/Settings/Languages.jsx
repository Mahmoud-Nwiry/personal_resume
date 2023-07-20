import { Box, Stack, Typography } from '@mui/material'
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import React from 'react'

import EnFlag from '../../assets/images/langueges/english.webp'
import ArFlag from '../../assets/images/langueges/arabic.png'
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

const langsObj = [
    {
        id : 1,
        lang : 'English',
        name : 'en',
        image : EnFlag
    },
    {
        id : 2,
        lang : 'العربية',
        name : 'ar',
        image : ArFlag
    },
]

const Languages = () => {


    const {language, setLanguage} = useContext(LanguageContext)
    const {t} = useTranslation()

    const changeLang = (lang) => {
        localStorage.setItem('MN-Lang', lang)
        setLanguage(lang);
    }

  return (
    <Box p={4} borderBottom='1px solid' borderColor='background.toTop'>
        <Stack direction='row' textAlign='center'>
            <Typography sx={{display : 'flex', alignItems : 'center'}}>
                <TranslateOutlinedIcon color='primary' fontSize="medium"  />
            </Typography>
            <Typography variant='h6' mx={2}>{t('setting.languages')}</Typography>
        </Stack>

        <Stack direction='row' gap={5} mt={3} mb={2} textAlign='center'  pl={language === 'ar' ? 0 : 6} pr={language === 'ar' ? 6 : 0}>
            {
                langsObj.map(lang => (
                    <Box 
                        onClick={()=>changeLang(lang.name)} 
                        key={lang.id} 
                        width={40} 
                        height={30} 
                        className={language === lang.name ? 'active' : ''}
                        sx={{
                            cursor : 'pointer',
                            '&.active' : {
                                border : '5px solid',
                                borderColor : 'text.primary'
                            }
                        }}
                    >
                        <img src={lang.image} alt={lang.lang} style={{maxWidth : '100%', height : '100%'}} />
                    </Box>
                ))
            }
        </Stack>
    </Box>
  )
}

export default Languages
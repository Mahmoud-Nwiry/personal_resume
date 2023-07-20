import { Box, Container, Paper, Typography } from '@mui/material'
import NorthIcon from '@mui/icons-material/North';
import React, { useContext } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const {language} = useContext(LanguageContext)
  const {t} = useTranslation()

  return (
    <Paper sx={{mt : 4, py : 5, position : 'relative'}}>
        <Container 
          sx={{
            display : 'flex', 
            gap : 1, 
            margin : 
            {xs : '0px!important'},
            width : {xs : 'unset!important', md : "calc(100% - 120px)!important"}
            }}
          >
            <Typography fontSize={{xs : '.7rem', md : '.9rem'}} color="text.paragraph">&copy; {t('footer.copy')}</Typography>
            <Typography fontSize={{xs : '.7rem', md : '.9rem'}} color="primary">{t('footer.created')}</Typography>
        </Container>

        <Box onClick={() => window.scrollTo(0, 0)}
        sx={{
          position : 'absolute',
          top : 0,
          right : language === "ar" ? "unset" : 0,
          left : language === "ar" ? 0 : 'unset',
          height : '100%',
          width : {xs : 60, md : 80},
          backgroundColor : 'background.toTop',
          color : 'text.paragraph',
          display : 'flex',
          alignItems : 'center',
          justifyContent : 'center',
          cursor : 'pointer',
          transition : 'all .3s',
          '&:hover' : {
            backgroundColor : 'primary.main',
            color : '#fff',
            my : '-5px',
            height : 'calc(100% + 10px)'
          }
        }}>
          <NorthIcon sx={{color : 'inherit'}} />
        </Box>
    </Paper>
  )
}

export default Footer
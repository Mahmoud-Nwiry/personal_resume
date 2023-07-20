import React from 'react'
import Section from '../Section'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { Box, Grid, Link, Typography } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Form from './Form';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  fontSize : '1rem',
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    borderRadius : 0,
    textTransform : 'capitalize',
    fontSize : 20,
    boxShadow: theme.shadows[1],
    fontSize: theme.typography.pxToRem(12),
  },
}));

const Contact = () => {

  const {language} = useContext(LanguageContext)
  const {t} = useTranslation()

  return (
    <Section 
        id='Contact'
        title={t('contact.title')}
        icon={
            <CallOutlinedIcon color="primary" fontSize="large" />
         } 
        pargraph={t('contact.p')}
    >
        <Grid container columns={2} spacing={{xs : 0, md : 8}} mt={{xs : 0, md : 8}}>
         <Grid item md={1} xs={2}>
          <Box sx={{
            p : {xs : 2, md : 6},
            mb : {xs : 1.5, md : 4},
          }}>
             <Typography
                sx={{
                    textTransform : 'uppercase',
                    fontWeight : 700,
                    fontSize : '1rem',
                    color : 'text.main',
                    mb : 4
                }}
            >{t('contact.info.phone')}</Typography>
            <Grid container columns={12} my={3}>
                <Grid item xs={3}><Typography color='text.opacity' fontStyle='italic' textTransform='capitalize'>{t('contact.info.mob')}.</Typography></Grid>
                <Grid item xs={1}><Typography color='text.opacity'>:</Typography></Grid>
                <Grid item xs={8}>
                  <Typography color='text.opacity' fontStyle='italic' component='pre' >
                  {
                    language === 'ar' ? '970-59-739-5385+' : '+970-59-739-5384'
                  }
                  </Typography>
                </Grid>
            </Grid>
            <Grid container columns={12} my={3}>
                <Grid item xs={3}><Typography color='text.opacity' fontStyle='italic' textTransform='capitalize'>{t('contact.info.whats')}</Typography></Grid>
                <Grid item xs={1}><Typography color='text.opacity'>:</Typography></Grid>
                <Grid item xs={8}>
                  <Typography color='text.opacity' fontStyle='italic'>
                  {
                      language === 'ar' ? '970-59-739-5385+' : '+970-59-739-5384'
                  }
                  </Typography>
                </Grid>
            </Grid>
          </Box>
          <Box sx={{
            p : {xs : 2, md : 6},
            mb : {xs : 2, md : 6},
            boxShadow : '3px 3px 15px rgba(0,0,0,0.2)',
            backgroundColor : 'background.paper2'
          }}>
             <Typography
                sx={{
                    textTransform : 'uppercase',
                    fontWeight : 700,
                    fontSize : '1rem',
                    color : 'text.main',
                    mb : 4
                }}
            >{t('contact.info.email')}</Typography>
            
            <Typography color='text.opacity' mb={3} fontStyle='italic'>mahmoudnwiry409@gmail.com</Typography>
            <Typography color='text.opacity' fontStyle='italic'>mamo992001@gmail.com</Typography>
          </Box>
          <Box sx={{
            p : {xs : 2, md : 6},
            mb : 6
          }}>
             <Typography
                sx={{
                    textTransform : 'uppercase',
                    fontWeight : 700,
                    fontSize : '1rem',
                    color : 'text.main',
                    mb : 4
                }}
            >{t('contact.info.address')}</Typography>
            
            <Typography color='text.opacity' mb={3} fontStyle='italic'>{t('contact.info.addressA')}</Typography>
            <LightTooltip title={t('contact.info.mapTip')} placement={language === 'ar' ? 'left' : 'right'}>
              <Link 
                href='https://goo.gl/maps/qqK7Dm9ZAYYWvscp7'  
                target='_blank'
                sx={{
                  fontSize: '1rem',
                  fontStyle : 'italic',
                  textDecoration : 'none',
                  cursor : 'pointer',
                  '&:hover' : {
                    textDecoration : 'underline'
                  }
                }}
              >
                {t('contact.info.map')}
              </Link>
            </LightTooltip>
          </Box>
         </Grid>
         <Grid item md={1} xs={2}>
          <Form />
         </Grid>
        </Grid>
    </Section>
  )
}

export default Contact
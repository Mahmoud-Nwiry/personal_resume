import React from 'react'
import Section from '../Section'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { Box, Grid, Typography } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import AboutBox from './AboutBox';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

const boxes = [
    {
        id : 1,
        title : 'logo',
        logo : <StorefrontIcon sx={{color : 'primary.main', fontSize : '2.5rem', ml : '-10px'}} />,
        color : 'primary.main'
    },
    {
        id : 2,
        title : 'web',
        logo : <DashboardOutlinedIcon sx={{color : '#e63946', fontSize : '2.5rem', ml : '-5px'}} />,
        color : '#e63946'
    },
    {
        id : 3,
        title : 'soft',
        logo : <TvOutlinedIcon sx={{color : '#fcbf49', fontSize : '2.5rem'}} />,
        color : '#fcbf49'
    },
    {
        id : 4,
        title : 'app',
        logo : <PhoneAndroidOutlinedIcon sx={{color : '#a663cc', fontSize : '2.5rem', ml : '-5px'}} />,
        color : '#a663cc'
    },
];

const personal = [
    {
        id : 1,
        main : 'name',
        answer : 'nameA'
    },
    {
        id : 2,
        main : 'age',
        answer : 'ageA'
    },
    {
        id : 3,
        main : 'address',
        answer : 'addressA'
    },
    {
        id : 4,
        main : 'zip',
        answer : 'zipA'
    },
    {
        id : 5,
        main : 'phone',
        answer : 'phoneA'
    },
    {
        id : 6,
        main : 'email',
        answer : 'emailA'
    },
];

const About = () => {

    const {language} = useContext(LanguageContext)
    const {t} = useTranslation()

  return (
    <Section 
        id="About"
        title={t('about.title')}
        icon={
            <Person2OutlinedIcon color="primary" fontSize="large" />
         } 
        pargraph={t('about.p')}
    >
        <Grid container columns={12} spacing={{xs : 0, md : 4}} mt={4}>
          <Grid md={5} xs={12} item mb={{xs : 6, md : 0}}>
            <Grid container alignItems='stretch' columns={2} spacing={{xs : 2, md : 6}}>
                {
                    boxes.map(item => (
                    <Grid item lg={1} xs={2}>
                        <AboutBox key={item.id} title={item.title} logo={item.logo} color={item.color} />
                    </Grid>))
                }
            </Grid>
          </Grid>
          <Grid md={7} xs={12} item>
            <Box 
                pl={language === 'ar' ? 0 : {xs : 0 , md : 10}}
                pr={language === 'ar' ? {xs : 0 , md : 10} : 0}
            >
                <Typography variant='h6' textTransform='uppercase' fontWeight={700} mb={6}>{t('about.personal.title')}</Typography>
                <Box>
                    {
                        personal.map(item => (
                            <Grid key={item.id} container columns={12} my={4}>
                                <Grid item xs={3}><Typography fontSize={{xs : '.9rem', md : '1rem'}} color='text.opacity'>{t(`about.personal.${item.main}`)}</Typography></Grid>
                                <Grid item xs={1}><Typography fontSize={{xs : '.9rem', md : '1rem'}} color='text.opacity'>:</Typography></Grid>
                                <Grid item xs={8}><Typography fontSize={{xs : '.9rem', md : '1rem'}} color='text.paragraph' fontWeight={500} fontStyle='italic'>{t(`about.personal.${item.answer}`)}</Typography></Grid>
                            </Grid>
                        ))
                    }
                </Box>
            </Box>
          </Grid>
        </Grid>
    </Section>
  )
}

export default About
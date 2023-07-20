import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

import { Circle } from 'rc-progress'
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'
import { useTranslation } from 'react-i18next'

const Languages = () => {

  const {language} = useContext(LanguageContext)
  const {t} = useTranslation();

  return (
    <Box mt={{xs : 6, md: 12}}>
      <Typography 
          variant='h6' 
          component='h3'
          sx={{
            textTransform : 'uppercase',
            fontWeight : 600,
            fontSize : '1.1rem'
          }}
        >
          {t('skills.lang.title')}
        </Typography>
        <Grid container columns={2} spacing={{xs : 1, md : 8}} alignItems='center'>
          <Grid item md={1} xs={2}>
          <Typography 
                variant='body2' 
                sx={{
                    mt : 3,
                    mb : 6,
                    fontSize : '.9rem',
                    color : 'text.opacity',
                    pr : language == 'ar' ? 0 : 10,
                    pl : language === 'ar' ? 10 : 0
                }}
            >
              {t('skills.lang.p')}
            </Typography>
          </Grid>
          <Grid item md={1} xs={2}>
            <Grid container columns={3} spacing={4} width='100%' mx={{xs : 0, md : 4}} justifyContent='space-around'>
              <Grid item md={1} position='relative' width='100px' height='100px'>

                <Circle 
                  strokeColor='#00bfa5' 
                  trailWidth={8} 
                  trailColor='#efefef' 
                  strokeLinecap="square" 
                  percent={100} 
                  strokeWidth={8} 
                  style={{position : 'absolute', top : '50%', left : '50%', width : '90%', transform : 'translate(-50%,-50%)'}}
                  />
                  <Typography
                    variant='h6'
                    sx={{
                      position : 'absolute', 
                      top : '50%', 
                      left : '50%', 
                      transform : 'translate(-50%,-50%)',
                      textTransform : 'uppercase',
                      fontSize : {xs :'.9rem', md : '1.1rem'}
                    }}
                  >
                    {t('skills.lang.ar')}
                  </Typography>
              </Grid>
              <Grid item md={1} position='relative' width='100px' height='100px'>

                <Circle 
                  strokeColor='#ef233c' 
                  trailWidth={8} 
                  trailColor='#efefef' 
                  strokeLinecap="square" 
                  percent={60} 
                  strokeWidth={8} 
                  style={{position : 'absolute', top : '50%', left : '50%', width : '90%', transform : 'translate(-50%,-50%) rotate(180deg)'}}
                  />
                  <Typography
                    variant='h6'
                    sx={{
                      position : 'absolute', 
                      top : '50%', 
                      left : '50%', 
                      transform : 'translate(-50%,-50%)',
                      textTransform : 'uppercase',
                      fontSize : {xs :'.9rem', md : '1.1rem'}
                    }}
                  >
                    {t('skills.lang.en')}
                  </Typography>
              </Grid>
              <Grid item md={1} position='relative' width='100px' height='100px'>

                <Circle 
                  strokeColor='#faa307' 
                  trailWidth={8} 
                  trailColor='#efefef' 
                  strokeLinecap="square" 
                  percent={5} 
                  strokeWidth={8} 
                  style={{position : 'absolute', top : '50%', left : '50%', width : '90%', transform : 'translate(-50%,-50%) rotate(-180deg)'}}
                  />
                  <Typography
                    variant='h6'
                    sx={{
                      position : 'absolute', 
                      top : '50%', 
                      left : '50%', 
                      transform : 'translate(-50%,-50%)',
                      textTransform : 'uppercase',
                      fontSize : {xs :'.9rem', md : '1.1rem'}
                    }}
                  >
                    {t('skills.lang.dutch')}
                  </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </Box>
  )
}

export default Languages
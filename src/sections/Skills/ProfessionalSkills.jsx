import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';

const proSkills = [
  {
    id : 1,
    skill : 'Html/Css',
    progress : 95,
    color : 'primary.main'
  },
  {
    id : 2,
    skill : 'Javascript',
    progress : 90,
    color : '#0096c7'
  },
  {
    id : 3,
    skill : 'ReactJs',
    progress : 80,
    color : '#ef233c'
  },
  {
    id : 4,
    skill : 'NodeJs',
    progress : 70,
    color : '#faa307'
  },
  {
    id : 5,
    skill : 'ExpressJs',
    progress : 75,
    color : '#7209b7'
  },
  {
    id : 6,
    skill : 'MongoDB',
    progress : 80,
    color : '#5bba6f'
  },
];

const Skill = ({skill, progress, color}) => {
    const {language} = useContext(LanguageContext)
    return (
    <Grid container columns={4} spacing={2} alignItems='center'>
      <Grid item md={1} xs={4}>
        <Typography color='text.opacity'>{skill}</Typography>
      </Grid>
      <Grid item md={3} xs={4}>
        <Box 
          sx={{
            position :'relative',
            width : '100%',
            height : 4,
            background : '#ccc'
          }}
        >
          <Box
            sx={{
              width : `${progress}%`,
              height : '100%',
              backgroundColor : color,
              position : 'absolute',
              top : 0,
              left : language === 'ar' ? 'unset' : 0,
              right : language === 'ar' ? 0 :  'unset'
            }}
          ></Box>
          <Typography 
            color={color}
            sx={{
              position : 'absolute',
              bottom : 8,
              left : language === 'ar' ? 'unset' : `${progress}%`,
              right : language === 'ar' ? `${progress-15}%` :  'unset',
              transform : 'translateX(-60%)'
            }}
          >
            {progress}%
          </Typography>
        </Box>
      </Grid>
    </Grid>
)}

const ProfessionalSkills = ({title}) => {
  return (
    <Paper sx={{
        mt : {xs : 4, md : 12},
        p : {xs: 6, md : 10},
        backgroundColor : 'background.paper2',
        boxShadow : '3px 3px 15px rgba(0,0,0,0.4)'
    }}>
        <Typography 
          variant='h6' 
          component='h3'
          sx={{
            textTransform : 'uppercase',
            fontWeight : 600,
            fontSize : '1.1rem'
          }}
        >
          {title}
        </Typography>
        <Grid container columns={2} spacing={{xs : 6, md :12}} mt={{xs : 0 ,md : 0}}>
          {proSkills.map(item => (
            <Grid item md={1} xs={2}>
              <Skill key={item.id} skill={item.skill} progress={item.progress} color={item.color} />
            </Grid>
          ))}
        </Grid>
    </Paper>
  )
}

export default ProfessionalSkills
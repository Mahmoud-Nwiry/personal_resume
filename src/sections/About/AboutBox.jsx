import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutBox = ({logo, title, color}) => {

  const {t} = useTranslation()

  return (
    <Box 
        bgcolor='background.paper' 
        p={6} 
        borderBottom={`4px solid`} 
        borderColor={color}
        boxShadow='2px 2px 12px rgba(50,50,50,0.2)'
        height='100%'  
      >
        {logo}
        <Typography variant='body1' fontSize='100%'  mt={3}>{t(`about.fildes.${title}`)}</Typography>
    </Box>
  )
}

export default AboutBox
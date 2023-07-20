import { Box, Chip, Stack, Typography } from '@mui/material'
import React from 'react'

const ProjectBox = ({image, title, tags, tech, link}) => {
  return (
    <Box  
        sx={{ 
            boxShadow : '0px 0px 8px rgba(0,0,0,0.2)',
            position : 'relative',
            cursor : 'pointer' ,
            overflow : 'clip',
            display : 'block',
            color : 'inherit',
            textDecoration : 'none',
            transition : 'all .2',
            '&:hover .projectLayer' : {
                transform : 'scale(1,1)',
                opacity : 1
            },
            '&:hover .projectHiddenBox' : {
                transform : 'translateY(0)'
            }
        }}
        component='a'
        href={link}
        target='_blank'
    >
        <Box sx={{backgroundColor : 'background.default', height : 350}}>
            <img src={image} alt={title} style={{width : '100%', maxWidth : '100%'}} />
        </Box>
        <Box className='projectLayer' 
            sx={{
                position : 'absolute', 
                left : 0, 
                right : 0, 
                bottom : 0,
                top : 0,
                transform : 'scale(.8,.8)',
                opacity : 0,
                backgroundColor : 'rgba(0,0,0,0.5)',
                transition : 'all .1s', 
            }}>
            </Box>
        <Box 
            className='projectHiddenBox'
            sx={{
                p : 3,
                transform : 'translateY(300px)',
                transition : 'all .2s', 
                position : 'absolute', 
                left : 5, 
                right : 5, 
                bottom : 5, 
                zIndex : 2, 
                backgroundColor : 'background.paper'
            }}
        >
            <Typography variant='body1' component='h4' sx={{fontSize : '1.2rem', fontWeight : 500, mb : 1}}>
                {title}
            </Typography>
            <Stack direction='row' alignItems='baseline' columnGap={2} flexWrap='wrap'>
                {
                    tags.map(tag => (
                        <Typography key={tag} variant='body2' sx={{fontSize : '.9rem', color : '#999', fontStyle : 'italic'}}>#{tag}</Typography>
                    ))
                }
            </Stack>
            <Stack mt={2} direction='row' alignItems='baseline' gap={1} flexWrap='wrap'>
                {
                    tech.map(tec => (
                        <Chip key={tec} label={tec} size='small' sx={{borderRadius : '0'}} color="primary" variant='outlined' />
                    ))
                }
            </Stack>
        </Box>
    </Box>
  )
}

export default ProjectBox
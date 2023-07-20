import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useRef } from 'react'
import { NavActiveContexts } from '../../contexts/NavActiveContext'
import { LanguageContext } from '../../contexts/LanguageContext';

const Section = ({title, icon, pargraph, id, children}) => {

    const {setSectionsY} = useContext(NavActiveContexts);
    const {language} = useContext(LanguageContext)
    const section = useRef();
    
    useEffect(() => {
        
        window.addEventListener('scroll', () => {
            if(id === 'Projects'){
                if(window.scrollY > ( section.current.offsetTop + section.current.offsetHeight - window.innerHeight - 450))
                setSectionsY(`${id}`)
            }
            else{
                if(window.scrollY > ( section.current.offsetTop + section.current.offsetHeight - window.innerHeight - 350))
                setSectionsY(`${id}`)
            }

        })
    },[])



  return (
    <Paper component='section' ref={section} id={id} sx={{mt : 4, py : {xs : 6, md : 1}}} >
        <Container  sx={{margin : {xs : '0px!important', md : '60px!important'}, width : {xs : 'unset!important', md : "calc(100% - 120px)!important"}}}>
            <Box position='relative'>
                <Stack direction='row' textAlign='center'>
                    <Typography sx={{display : 'flex', alignItems : 'center'}}>{icon}</Typography>
                    <Typography variant='h4' fontFamily="'Cabin', 'Segoe UI', sans-serif" mx={2}>{title}</Typography>
                </Stack>
                <Typography 
                    variant='h2'
                    sx={{
                        fontWeight : 900,
                        position : 'absolute',
                        top : '-40%',
                        fontFamily : "'Cabin', 'Segoe UI', sans-serif",
                        left : language === 'ar' ? 'unset' : 0,
                        right : language === 'ar' ? 0 : 'unset',
                        letterSpacing : '2px',
                        opacity : '.1',
                        fontSize : '3.8rem',
                        textTransform : 'uppercase',
                        color : 'text.opacity'
                    }}
                >{title}</Typography>
            </Box>
            <Typography 
                variant='body2' 
                sx={{
                    mt : 3,
                    mb : 6,
                    fontSize : '.9rem',
                    color : 'text.paragraph'
                }}
            >
                {pargraph}
            </Typography>
            <Box>
                {children}
            </Box>
        </Container>
    </Paper>
  )
}

export default Section
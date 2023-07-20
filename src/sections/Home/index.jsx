import { Box, Button, Container, Divider, Paper, Stack, Typography } from '@mui/material'
import TerminalIcon from '@mui/icons-material/Terminal';
import React from 'react'
import { NavActiveContexts } from '../../contexts/NavActiveContext';
import { useContext } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../contexts/LanguageContext';

const Home = () => {

    const {setSectionsY} = useContext(NavActiveContexts);
    const {language} = useContext(LanguageContext)
    const {t} = useTranslation()
    
    useEffect(() => {
        
        window.addEventListener('scroll', () => {
            if(window.scrollY <= 100)
            setSectionsY('Home')

        })
    },[])

  return (
    <Paper sx={{mt : 4, py : {xs : 2, md : 12}}} component='section' id="Home">
        <Container sx={{margin : {xs : '10px!important', md : '60px!important'}, width : {xs : 'unset!important', md : "calc(100% - 120px)"}}}>
            <Stack direction={{xs : 'column', md  : 'row'}} gap={4} justifyContent='space-between' alignItems={{xs : 'unset',md : 'center'}} divider={<Divider orientation="vertical" sx={{backgroundColor : 'background.line'}} flexItem />}>
                <Box>
                    <Typography variant='h2' fontFamily="'Cabin', 'Segoe UI', sans-serif" fontWeight={700} letterSpacing={1}>{t('home.hello')}</Typography>
                    <Typography variant='body2' fontSize='2rem' fontWeight='100'>{t('home.name')}</Typography>
                    <Typography variant='body2' fontSize='1.1rem' fontWeight='100' mt={1} mb={7}>{t('home.addicted')}</Typography>

                    <Button variant='contained' sx={{py : 3, px: 5}} href='#Projects'>
                        <TerminalIcon fontSize='small' sx={{mx : 1}}/> {t('home.btn')}
                    </Button>
                </Box>
                <Box>
                    <Box width={{xs : '100%', md : '450px'}} height='300px' bgcolor='#eaeaea'>
                        
                    </Box>
                </Box>
            </Stack>
        </Container>
    </Paper>
  )
}

export default Home
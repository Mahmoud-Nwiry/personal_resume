import { Box, Container, IconButton, Paper, Stack } from '@mui/material'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import React, { useContext, useEffect, useState } from 'react'
import { SettingContexts } from '../../contexts/SettingsContexts';
import { NavActiveContexts } from '../../contexts/NavActiveContext';
import { useTranslation } from 'react-i18next';

import links from './links';


const NavBar = () => {

    const {setSettingOpen} = useContext(SettingContexts);
    const {sectionsY} = useContext(NavActiveContexts);
    const {t} = useTranslation();

    const [scrolled, setScrolled] = useState(false);

    const changeNavBg = () => {
       if(window.scrollY > 100) setScrolled(true)
       else setScrolled(false)
    }

    useEffect(()=>{
        window.addEventListener('load', changeNavBg)
        window.addEventListener('scroll', changeNavBg)
    },[])

    return (
        <Paper 
            className={`${scrolled ? 'active' : ''}`}
            sx={{
                position : 'sticky', 
                top : 0, 
                left : 0, 
                zIndex : 999,
                border : '2px dashed',
                borderColor : 'background.paper', 
                backgroundColor : 'background.paper',
                boxShadow : '2px 2px 10px rgba(0,0,0,0.2)',
                display : {xs : 'none!important' , md : 'block!important'},
                '&.active' : {
                    border : '2px dashed',
                    borderColor : 'primary.main',
                    backgroundColor : 'background.paper2',
                },
                '&.active a.active' : {
                    my : 2,
                    py : 3
                }
            }}
        >
            <Container>
                <Box display='flex' alignItems='center' justifyContent='space-between' position='static'>
                    <Stack direction='row'>
                        {
                            links.map(link => (
                                <Box
                                component='a'
                                href={`#${link.title}`}
                                className={sectionsY === link.title ? 'active' : ''}
                                onScrollCapture={()=>console.log('ss')}
                                sx={{
                                    px : 4,
                                    py : 5,
                                    transition : 'all .3s',
                                    color : 'inherit',
                                    textDecoration : 'none',
                                    display : 'block',
                                    cursor : 'pointer',
                                    '&:not(.active):hover' : {
                                        backgroundColor : 'background.default',
                                        opacity : '.8'
                                    },
                                    '&.active' : {
                                        backgroundColor : 'primary.main',
                                        color : '#fff',
                                        py : 7,
                                        my : -2
                                    }
                                }}>
                                    {t(`nav.${link.title}`)}
                                </Box>
                            ))
                        }
                    </Stack>
                    <IconButton onClick={()=>setSettingOpen(true)}>
                        <SettingsOutlinedIcon sx={{color :'primary.main'}} />
                    </IconButton>
                </Box>
            </Container>
        </Paper>
    )
}

export default NavBar
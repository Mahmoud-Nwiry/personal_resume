import { IconButton, Paper, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { NavActiveContexts } from '../../contexts/NavActiveContext';
import { useTranslation } from 'react-i18next';
import { SettingContexts } from '../../contexts/SettingsContexts';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { MiniNavContext } from '../../contexts/MiniNavContext';


const MiniNav = () => {
    const {setSettingOpen} = useContext(SettingContexts);
    const {sectionsY} = useContext(NavActiveContexts);
    const {setMiniNavOpen} = useContext(MiniNavContext)
    const {t} = useTranslation();

    const [scrolled, setScrolled] = useState(false);

    const changeNavBg = () => {
       if(window.scrollY > 10) setScrolled(true)
       else setScrolled(false)
    }

    useEffect(()=>{
        window.addEventListener('load', changeNavBg)
        window.addEventListener('scroll', changeNavBg)
    },[])

  return (
    <Paper 
        component='section' 
        className={`${scrolled ? 'active' : ''}`}
        sx={{
            p : 2,
            position : 'fixed',
            top : 0, 
            left : 0,
            zIndex : 999,
            width : '100vw',
            display : 'flex!important',
            flexDirection : 'row',
            alignItems : 'center',
            justifyContent : 'space-between',
            border : '2px dashed',
            borderColor : 'background.paper', 
            '&.active' : {
                border : '2px dashed',
                borderColor : 'primary.main',
                backgroundColor : 'background.paper2',
            },
        }}
    >
        <Typography variant='h6' color='primary'>
            {t(`nav.${sectionsY}`)}
        </Typography>
        <Stack direction='row'>
        <IconButton onClick={()=>setSettingOpen(true)}>
            <SettingsOutlinedIcon sx={{color :'primary.main'}} />
        </IconButton>
        <IconButton onClick={()=>setMiniNavOpen(true)}>
            <MenuIcon sx={{color :'primary.main'}} />
        </IconButton>
        </Stack>
    </Paper>
  )
}

export default MiniNav
import { Box, Drawer, IconButton, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { MiniNavContext } from '../../contexts/MiniNavContext'
import { useTranslation } from 'react-i18next'
import CloseIcon from '@mui/icons-material/Close';
import { NavActiveContexts } from '../../contexts/NavActiveContext';

import links from './links';

const NavMneu = () => {

const {miniNavOpen, setMiniNavOpen} = useContext(MiniNavContext)
const {sectionsY} = useContext(NavActiveContexts);
  const {t} = useTranslation()

  return (
    <Drawer 
    open={miniNavOpen} 
    anchor="right"
    onClose={() => setMiniNavOpen(false)}
    sx={{
        '& .MuiDrawer-paper' : {
            right :  20,
            left : 20,
            bottom : 20,
            top : 20,
            height : 'unset',
            maxWidth : '100%',
        }
    }}  
>
    <Box>
        <Stack p={4} direction='row' textAlign='center' justifyContent='space-between'  borderBottom='2px solid' borderColor='background.toTop'>
            <Typography variant='h5' mx={2}>{t('nav.mini')}</Typography>
            <IconButton onClick={()=>setMiniNavOpen(false)}>
                <CloseIcon sx={{color :'primary.main'}} />
            </IconButton>
        </Stack>
        <Stack direction='column' my={2}>
            {
                links.map(link => (
                    <Box
                    component='a'
                    href={`#${link.title}`}
                    onClick={() => setMiniNavOpen(false)}
                    className={sectionsY === link.title ? 'active' : ''}
                    sx={{
                        px : 4,
                        py : 5,
                        transition : 'all .3s',
                        color : 'inherit',
                        textDecoration : 'none',
                        display : 'block',
                        cursor : 'pointer',
                        fontSize : '1.2rem' ,
                        '&:not(.active):hover' : {
                            backgroundColor : 'background.default',
                            opacity : '.8'
                        },
                        '&.active' : {
                            backgroundColor : 'primary.main',
                            color : '#fff',
                            px : 6
                        }
                    }}>
                        {t(`nav.${link.title}`)}
                    </Box>
                ))
            }
        </Stack>
    </Box>
</Drawer>
  )
}


const NavLink = ({title}) => {

}
export default NavMneu
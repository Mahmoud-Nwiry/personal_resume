import { Box, Button, Typography } from '@mui/material'
import Me from '../../assets/images/me4.png'
import React from 'react'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const icons = [
    {
        icon : <WhatsAppIcon />,
        to : 'https://wa.me/+970597395384'
    },
    {
        icon : <FacebookIcon />,
        to : 'https://www.facebook.com/profile.php?id=100009570887309'
    },
    {
        icon : <InstagramIcon />,
        to : 'https://www.instagram.com/ma1_mero/'
    },
    {
        icon : <TwitterIcon />,
        to : '#'
    },
    {
        icon : <LinkedInIcon />,
        to : 'https://www.linkedin.com/in/mahmoudnwiry/'
    },
    {
        icon : <GitHubIcon />,
        to : 'https://github.com/Mahmoud-Nwiry'
    },
]

const SocialIcons = ({icon, link}) => (
    <Box 
        component='a'
        href={link}
        target='_blank'
        sx={{
            width : 40,
            height : 40,
            borderRadius : '50%',
            backgroundColor : 'background.default',
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center',
            cursor : 'pointer',
            transition : 'all .2s',
            color : 'inherit',
            '&:hover' : {
                backgroundColor : 'primary.main',
                color : '#fff'
            }
        }}
    >
        {icon}
    </Box>
)

const SideBar = () => {

    const {t} = useTranslation()

  return (
    <Box position='static'>
        <Box sx={{border : '2px solid', borderColor : 'background.paper'}}>
            <img src={Me} alt="me" style={{maxWidth : '100%'}} />
        </Box>
        <Box textAlign='center' my={2} boxShadow='0px 15px 15px rgba(0,0,0,.1)'>
            <Typography variant='h4' component='h3' fontWeight={400} fontFamily="'Kaushan Script', 'Reem Kufi', cursive">{t('sidebar.name')}</Typography>
            <Typography color="primary" mt={1} pb={2} variant='h6' component='h4'>{t('sidebar.job')}</Typography>
        </Box>
        <Box 
            sx={{
                py : 6,
                px : 7,
                display : 'flex',
                justifyContent : 'center',
                gap : 2,
                borderBottom : '2px solid',
                borderBottomColor : 'background.default'
            }}
            component='ul'
        >
            {
                icons.map((item, index) => <SocialIcons key={index} icon={item.icon} link={item.to} />)
            }
        </Box>
        <Box
            sx={{
                py : 6,
                pl : 7,
                pr : 4
            }}
        >
            <Typography
                variant='body1'
                component='h5'
                sx={{
                    fontWeight : 700,
                    textTransform : 'uppercase'
                }}
            >
                {t('sidebar.mind.title')}
            </Typography>
            <Typography
                variant='body2'
                component='p'
                sx={{
                    mt : 2,
                    mp : 5,
                    color : 'text.paragraph'
                }}
            >
                {t('sidebar.mind.body')}
            </Typography>
        </Box>
        <Box
            sx={{
                textAlign : 'center',
                py : 8
            }}
        >
            <Button component='a' variant='contained' sx={{py : 3, px: 5}} href='../../assets/pdf/Mahmoud-Nwiry.pdf' download="Mahmoud-Nwiry.pdf">
                <FileDownloadOutlinedIcon fontSize='small' sx={{mx : 1}}/> {t('sidebar.cv')}
            </Button>
        </Box>
    </Box>
  )
}


export default SideBar
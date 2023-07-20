import { Box, Drawer, IconButton, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { SettingContexts } from '../../contexts/SettingsContexts'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Languages from './Languages';
import Theme from './Theme';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';

const Settings = () => {

  const {settingOpen, setSettingOpen} = useContext(SettingContexts)
  const {language} = useContext(LanguageContext)
  const {t} = useTranslation()

  return (
    <Drawer 
          open={settingOpen} 
          anchor="right"
          onClose={() => setSettingOpen(false)}
          sx={{
            '& .MuiDrawer-paper' : {
              right : language === 'ar' ? 'unset' : 20,
              left : language === 'ar' ? 20 : 'unset',
              bottom : 20,
              top : 20,
              height : 'unset',
              maxWidth : 300,
            }
          }}  
        >
          <Box p={4} borderBottom='2px solid' borderColor='background.toTop'>
            <Stack direction='row' textAlign='center' justifyContent='space-between'>
              <Box display='flex' alignItems='center'>
                <Typography sx={{display : 'flex', alignItems : 'center'}}>
                  <SettingsOutlinedIcon color='primary' fontSize="medium"  />
                </Typography>
                <Typography variant='h5' mx={2}>{t('setting.title')}</Typography>
              </Box>
              <IconButton onClick={()=>setSettingOpen(false)}>
                <CloseIcon sx={{color :'primary.main'}} />
              </IconButton>
            </Stack>
          </Box>
          <Languages />
          <Theme />
        </Drawer>
  )
}

export default Settings
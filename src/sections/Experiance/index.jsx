import React from 'react'
import Section from '../Section'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Grid } from '@mui/material';
import Experiances from './Experiances';
import Awards from './Awards';
import { useTranslation } from 'react-i18next';


const Experiance = () => {

  const {t} = useTranslation();

  return (
    <Section 
        id='Experiance'
        title={t('exp.title')}
        icon={
            <EditOutlinedIcon color="primary" fontSize="large" />
         } 
        pargraph={t('exp.p')}
    >
        <Grid container columns={3} spacing={4} mt={8}>
          <Grid md={2} item>
            <Experiances />
          </Grid>
          <Grid md={1} item>
            <Awards />
          </Grid>
        </Grid>
    </Section>
  )
}

export default Experiance
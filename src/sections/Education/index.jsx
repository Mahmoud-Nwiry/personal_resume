import React from 'react'
import Section from '../Section'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CustomizedAccordions from './Accordion';
import { useTranslation } from 'react-i18next';

const Education = () => {

  const {t} = useTranslation()

  return (
    <Section 
        id='Education'
        title={t('edu.title')}
        icon={
            <SchoolOutlinedIcon color="primary" fontSize="large" />
         } 
        pargraph={t('edu.p')}
    >
        <CustomizedAccordions />
    </Section>
  )
}

export default Education
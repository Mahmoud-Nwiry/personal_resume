import React from 'react'
import Section from '../Section'
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Tag from './Tag';
import { Stack } from '@mui/material';
import PersonalSkills from './ProfessionalSkills';
import Languages from './Languages';
import { useTranslation } from 'react-i18next';

const tags = ['html', 'mern', 'css', 'webDeveloper', 'reactjs']


const Skills = () => {

  const {t} = useTranslation();

  return (
    <Section 
        id="Skills"
        title={t('skills.title')}
        icon={
            <EmojiObjectsOutlinedIcon color="primary" fontSize="large" />
         } 
        pargraph={t('skills.p')}
    >
        <Stack direction='row' spacing={1} alignItems='center' flexWrap='wrap'>
          <LocalOfferOutlinedIcon />
          {
            tags.map(item => <Tag key={item} tag={item} />)
          }
        </Stack>
        <PersonalSkills title={t('skills.pro')} />
        <Languages />
    </Section>
  )
}

export default Skills
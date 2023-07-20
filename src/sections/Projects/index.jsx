import React from 'react'
import Section from '../Section'
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import { Box, Button, Grid, Stack } from '@mui/material';
import ProjectBox from './ProjectBox';
import { useState } from 'react';
import projects from './projects';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import { useTranslation } from 'react-i18next';

const links = [
  {
      id : 1,
      title : 'all',
      tag : 'all'
  },
  {
      id : 2,
      title : 'front',
      tag : 'frontend'
  },
  {
      id : 3,
      title : 'back',
      tag : 'backend'
  },
  {
      id : 4,
      title : 'full',
      tag : 'fullstack'
  }
]


const Projects = () => {

  const [activeTab, setActiveTab] = useState(links[0].tag)
  const [myProjects, setMyProjects] = useState(projects);
  const {t} = useTranslation();

  return (
    <Section 
        id="Projects"
        title={t('projects.title')}
        icon={
            <LaptopChromebookOutlinedIcon color="primary" fontSize="large" />
         } 
        pargraph={t('projects.p')}
    >
        <Box mt={10} mb={3}>
        <Stack direction='row' mb={8} bgcolor='background.paper2' px={{xs : 1 ,  md : 8}} boxShadow='1px 1px 15px rgba(0,0,0,0.2)'>
          {
            links.map(link => (
              <Box
                className={activeTab === link.tag ? 'active' : ''}
                onClick={() => setActiveTab(link.tag)}
                sx={{
                  px : {xs : 2, md : 4},
                  py : {xs : 2.5, md : 5},
                  fontSize : {xs : '.8rem', md : '1rem'},
                  transition : 'all .3s',
                  cursor : 'pointer',
                  '&:not(.active):hover' : {
                    backgroundColor : 'background.default',
                    opacity : '.8'
                  },
                  '&.active' : {
                    backgroundColor : 'primary.main',
                    color : '#fff',
                    py : {xs : 3.5 , md : 7},
                    my : {xs : -1.5, md : -2}
                  }
                }}
              >
                {t(`projects.filter.${link.title}`)}
              </Box>
            ))
          }
        </Stack>

        <Grid container columns={6} spacing={4}>
          {
            activeTab !== 'all' ?
            myProjects.map(project => (
              project.categories.includes(activeTab)
              ? (
                <Grid item md={2}>
                  <ProjectBox 
                    key={project.id}
                    image={project.image}
                    title={project.name}
                    tags={project.categories}
                    tech={project.technologies}
                    link={project.link}
                  />
                </Grid>) 
              : ''
            )) : ''
          }
          {

            myProjects.map(project => (
                activeTab === 'all' ?
                <Grid item md={2}>
                  <ProjectBox 
                    key={project.id}
                    image={project.image}
                    title={project.name}
                    tags={project.categories}
                    tech={project.technologies}
                    link={project.link}
                  />
                </Grid>
                : ''
              )
            )
          }
        </Grid>

        {
          myProjects.length > 6 ? (
            <Box textAlign='center' mt={8}>
              <Button variant='contained' sx={{py : 3, px: 5}}>
                    <CachedOutlinedIcon fontSize='small' sx={{mx : 1}}/> Load More
                </Button>
            </Box>
          )
          : ''
        }

        </Box>
    </Section>
  )
}

export default Projects
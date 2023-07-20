import { Box, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'
import { useTranslation } from 'react-i18next'

const exps = [
    {
        id : 1,
        work : 'work1',
        color : 'primary.main',
        title : 'title',
        time: {
            start : 'dateS',
            end : 'dateE'
        },
        paragraph : 'body',
        link : 'https://www.google.com'
    },
    {
        id : 2,
        work : 'work2',
        color : '#ef233c',
        title : 'title',
        time: {
            start : 'dateS',
            end : 'dateE'
        },
        paragraph : 'body',
        link : 'https://www.google.com'
    },
    {
        id : 3,
        work : 'work2',
        color : '#faa307',
        title : 'title',
        time: {
            start : 'dateS',
            end : 'dateE'
        },
        paragraph : 'body',
        link : 'https://www.google.com'
    },
    {
        id : 4,
        work : 'work2',
        color : '#7209b7',
        title : 'title',
        time: {
            start : 'dateS',
            end : 'dateE'
        },
        paragraph : 'body',
        link : 'https://www.google.com'
    },
]

const Experiances = () => {

    const {language} = useContext(LanguageContext)

  return (
    <Paper sx={{backgroundColor : 'background.paper2'}}>
        <Box sx={{
             p : {xs : 2, md : 8},
             py : language === 'ar' ? 8 : 10,
             pl : language === 'ar' ? {xs : 2, md : 10} : {xs : 2, md : 8},
             position : 'relative',
             '&::before' : {
                content : '""',
                position : 'absolute',
                top : {xs : 15 ,md : 50},
                left : language === 'ar' ? 'unset' : { xs : 30 , md : 60},
                right : language === 'ar' ? { xs : 30 , md : 60} : 'unset',
                width : 2,
                height : {xs : '92%', md : '85%'},
                zIndex : '0',
                backgroundColor : 'background.line'
            }
        }}>
            <Box  
                sx={{ 
                    display : 'flex',
                    flexDirection : 'row',
                    alignContent : 'stretch',
                    gap : 8,
                    pl : language === 'ar' ? {xs : 4, md : 15} : {xs : 2, md : 4},
                    pr : language === 'ar' ? {xs : 2, md : 4} : {xs : 4, md : 15},
                    overflowY : 'auto', 
                    overflowX : 'visible',
                    maxHeight : {xs : 350 ,md : 650},
                    
                    '&::-webkit-scrollbar': {
                        width: '5px',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor : 'background.line'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'primary.main',
                        position : 'relative',
                        transform : 'translateY(400px)'
                    },
                    
                }}
            >
                <Box width='2px'></Box>
                <Box>
                
                {
                    exps.map(exp => (
                        <ExperianceBox 
                            key={exp.id}
                            title={exp.title} 
                            paragraph={exp.paragraph} 
                            time={exp.time} 
                            color={exp.color} 
                            link={exp.link} 
                            work={exp.work}
                            language={language}
                        />
                    ))
                }
                </Box>
            </Box>
        </Box>
    </Paper>
  )
}

const ExperianceBox = ({color, title, paragraph, time, link, work, language}) => {
    
    const {t} = useTranslation()

    return(
    <Box
        sx={{
            position : 'relative',
            pt :  2,
            mb : {xs : 4, md : 7},
        }}
    >
        <Typography
            variant='body1'
            component='h4'
            sx={{
                textTransform : 'uppercase',
                fontWeight : 700,
                fontSize : {xs : '.9rem', md : '1rem'},
                color : 'text.main',
                mb : {xs : 1, md : 2}
            }}
        >{t(`exp.works.${work}.${title}`)}</Typography>
        <Typography
            sx={{
                textTransform : 'capitalize',
                color : color,
                fontSize : {xs : '.8rem', md : '.9rem'},
                mb : {xs : 1.5, md : 3}
            }}
        >
            {t(`exp.works.${work}.${time.start}`)} - 
            {
                t(`exp.works.${work}.${time.end}`).toLowerCase() === 'current' || t(`exp.works.${work}.${time.end}`).toLowerCase() === 'الان' 
                ? <Typography 
                    sx={{
                        backgroundColor : color, 
                        color : '#fff', 
                        display : 'inline',
                        fontSize : {xs : '.6rem', md : '.7rem'},
                        py : .6,
                        px : 2,
                        mx : 1,
                    }}>
                    {t(`exp.works.${work}.${time.end}`)} 
                </Typography> 
                : 
                <Typography sx={{mx : 1, display : 'inline', fontSize : {xs : '.8rem', md : '.9rem'}}}>{t(`exp.works.${work}.${time.end}`)} </Typography> 
            }
        </Typography>
        <Typography
            sx={{
                color : 'text.opacity',
                fontSize : {xs : '.8rem', md : '1rem'},
                fontWeight : 500,
                lineHeight : '1.5',
                mb : {xs : 1.5, md : 3}
            }}
        >
            {t(`exp.works.${work}.${paragraph}`)} 
        </Typography>
        <Link 
            href={link} 
            target='_blank'
            sx={{
                color : color,
                textDecoration : 'none',
                fontSize : {xs : '.8rem', md : '.9rem'},
                fontStyle : 'italic',
                '&:hover': {
                    textDecoration : 'underline'
                }
            }}
            >{link}</Link>
        <Box
            sx={{
                position : 'absolute',
                top : 10,
                left : language === 'ar' ? 'unset' : {xs : '-41px', md : '-52px'},
                right : language === 'ar' ? {xs : '-41px', md : '-52px'} : 'unset',
                width : 25,
                height : 25,
                borderRadius : '50%',
                border : '3px solid',
                borderColor : color,
                p : .8
            }}
        >
            <Box
                sx={{
                    width : '100%',
                    height : '100%',
                    backgroundColor : color,
                    borderRadius : '50%'
                }}
            ></Box>
        </Box>
    </Box>
)}

export default Experiances
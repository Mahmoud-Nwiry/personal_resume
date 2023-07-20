import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import { useTranslation } from 'react-i18next';

const awards = [
    {
        id : 1,
        number : '01',
        award : "award1",
    },
    {
        id : 2,
        number : '02',
        award : "award2",
    },
    {
        id : 3,
        number : '03',
        award : "award3",
    },
]


const Awards = () => {
    const {t} = useTranslation();
  return (
    <Paper sx={{backgroundColor : 'background.paper2'}}>
        <Box 
            sx={{
                px : {xs : 3, md : 6}, 
                py : {xs : 4, md : 8},
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'flex-start',
                gap : 4,
                borderBottom : '2px solid',
                borderBottomColor : 'background.default'
            }}
        >
            <EmojiEventsTwoToneIcon sx={{color : 'gold', fontSize : '3rem'}} />
            <Typography
                sx={{
                    textTransform : 'uppercase',
                    fontWeight : 700,
                    fontSize : '1rem',
                    color : 'text.main'
                }}
            >03 {t('exp.awards.title')}</Typography>
        </Box>
        {
            awards.map(item => (
                <AwardBox 
                    key={item.id} 
                    number={item.number} 
                    title={t(`exp.awards.${item.award}.title`)} 
                    paragraph={t(`exp.awards.${item.award}.body`)} 
                />
            ))
        }
    </Paper>
  )
}


const AwardBox = ({number, title, paragraph}) => (
    <Box
        sx={{
            px : {xs : 3, md : 6}, 
            py : {xs : 4, md : 8},
            pt : {xs : 1, md : 8},
            borderBottom : '2px solid',
            borderBottomColor : 'background.default'
        }}
    >
        <Box 
            sx={{
                display : 'flex',
                alignItems : 'baseline',
                justifyContent : 'flex-start',
                gap : 2,
            }}
        >
            <Typography
                sx={{
                    color : 'background.line',
                    fontSize : '2.5rem',
                    fontWeight : 600
                }}
            >{number}</Typography>
            <Typography
                sx={{
                    textTransform : 'uppercase',
                    fontWeight : 700,
                    fontSize : {xs : '.9rem', md : '1rem'},
                    color : 'text.main'
                }}
            >{title}</Typography>
        </Box>
        <Typography
            sx={{
                color : 'text.opacity',
                fontSize : {xs : '.9rem', md : '1rem'},
                fontWeight : 500,
                lineHeight : '1.5',
            }}
        >{paragraph}</Typography>
    </Box>
)

export default Awards
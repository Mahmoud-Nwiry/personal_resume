import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MuiAccordion from '@mui/material/Accordion';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  boxShadow : 'none',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  flexDirection: 'row-reverse',
  transition : 'all 0.3s',
  '& .MuiAccordionSummary-expandIconWrapper' : {
    position : 'absolute',
    top : '50%',
    right : theme.direction === 'ltr' ? 25 : 'unset',
    left : theme.direction === 'rtl' ? 25 : 'unset',
    transform : 'translateY(-50%)',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded' :{
    transform : 'translateY(-50%)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  '&:hover' : {
    backgroundColor: theme.palette.background.default
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(8),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  backgroundColor : theme.palette.mode === 'light' ? '#f6f6f6' : '#333'
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const {language} = useContext(LanguageContext)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const {t} = useTranslation() 

  return (
    <Box mt={{xs : 4, md : 12}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary 
          sx={{
            p : {xs : 1, md : 3},
            '& .MuiAccordionSummary-expandIconWrapper' : {top : {xs : 31, md : '50%'}}
          }}
          expandIcon={
            expanded === 'panel1' ? 
            <RemoveIcon sx={{ fontSize: '1.5rem', color : 'primary.main' }} /> : 
            <AddIcon sx={{ fontSize: '1.5rem', color : 'primary.main' }} />
          } 
          aria-controls="panel1d-content" 
          id="panel1d-header"
        >
          <Box pr={language === 'ar' ? 1 : 4} pl={language === 'ar' ? 4 : 1} display='flex' alignItems='center' justifyContent='center'>
            <AutoStoriesOutlinedIcon sx={{fontSize : '1.9rem', color : "primary.main"}} />
          </Box>
          <Box display='flex' flexDirection={{xs : 'column', md : 'row'}} alignItems={{xs : 'flex-start', md :'center'}} justifyContent='center' gap={1}>
            <Typography fontWeight={600} fontSize={{xs : '.8rem',md :'1rem'}} textTransform='uppercase'>{t('edu.details.master')}</Typography>
            <Typography fontWeight={400} color="text.opacity" fontSize={{xs : '.8rem',md :'1rem'}}>{t('edu.details.university')}</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontWeight={400} color="text.paragraph" fontSize='1rem'>
            {t('edu.details.body')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary 
            sx={{
              p : {xs : 1, md : 3},
              '& .MuiAccordionSummary-expandIconWrapper' : {top : {xs : 31, md : '50%'}}
            }}
          expandIcon={
            expanded === 'panel2' ? 
            <RemoveIcon sx={{ fontSize: '1.5rem', color : '#ef233c' }} /> : 
            <AddIcon sx={{ fontSize: '1.5rem', color : '#ef233c' }} />
          } 
          aria-controls="panel2d-content" 
          id="panel2d-header"
        >
          <Box pr={language === 'ar' ? 1 : 4} pl={language === 'ar' ? 4 : 1} display='flex' alignItems='center' justifyContent='center'>
            <AutoStoriesOutlinedIcon sx={{fontSize : '1.9rem', color : "#ef233c"}} />
          </Box>
          <Box display='flex' flexDirection={{xs : 'column', md : 'row'}} alignItems={{xs : 'flex-start', md :'center'}} justifyContent='center' gap={1}>
            <Typography fontWeight={600} fontSize={{xs : '.8rem',md :'1rem'}}  textTransform='uppercase'>{t('edu.details.master')}</Typography>
            <Typography fontWeight={400} color="text.opacity" fontSize={{xs : '.8rem',md :'1rem'}} >{t('edu.details.university')}</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontWeight={400} color="text.paragraph" fontSize='1rem'>
            {t('edu.details.body')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary 
            sx={{
              p : {xs : 1, md : 3},
              '& .MuiAccordionSummary-expandIconWrapper' : {top : {xs : 31, md : '50%'}}
            }}
          expandIcon={
            expanded === 'panel3' ? 
            <RemoveIcon sx={{ fontSize: '1.5rem', color : '#faa307' }} /> : 
            <AddIcon sx={{ fontSize: '1.5rem', color : '#faa307' }} />
          } 
          aria-controls="panel3d-content" 
          id="panel3d-header"
        >
          <Box pr={language === 'ar' ? 1 : 4} pl={language === 'ar' ? 4 : 1} display='flex' alignItems='center' justifyContent='center'>
            <AutoStoriesOutlinedIcon sx={{fontSize : '1.9rem', color : "#faa307"}} />
          </Box>
          <Box display='flex' flexDirection={{xs : 'column', md : 'row'}} alignItems={{xs : 'flex-start', md :'center'}} justifyContent='center' gap={1}>
            <Typography fontWeight={600} fontSize={{xs : '.8rem',md :'1rem'}}  textTransform='uppercase'>{t('edu.details.master')}</Typography>
            <Typography fontWeight={400} color="text.opacity" fontSize={{xs : '.8rem',md :'1rem'}} >{t('edu.details.university')}</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontWeight={400} color="text.paragraph" fontSize='1rem'>
            {t('edu.details.body')}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
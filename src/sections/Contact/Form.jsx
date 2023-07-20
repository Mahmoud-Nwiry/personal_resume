import { Box, Button, TextField, Typography } from '@mui/material'
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { customTheme } from './customTheme';
import { useState, useRef } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const initData = {
  name : '',
  email : '',
  subject : '',
  question : ''
}

const Form = () => {

  const form = useRef();

  const [data, setData] = useState({...initData})
  const outerTheme = useTheme();
  const {t} = useTranslation()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e8ezr4u', 'template_yqw4i6x', form.current, '25SQK3mBe_pMSfzX8')
      .then((result) => {
          console.log(result.text);
          setData(initData)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Box
        ref={form}
        component='form'
        autoComplete={false}
        onSubmit={sendEmail}
        sx={{
            p : {xs : 4, md : 10},
            backgroundColor : 'primary.main'
        }}
    >
      <Typography 
          variant='body1'
          fontWeight={700}
          sx={{
              fontWeight : 600,
              fontSize : '1.1rem',
              color : 'primary.contrastText',
              textTransform : 'uppercase',
              mb : {xs : 1.5, md : 4},
          }}
      >
        {t('contact.form.title')}
      </Typography>
        
      <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField sx={{mb : {xs : 2, md : 4}}} required name='name' label={t('contact.form.name')} value={data.name} onChange={(e)=>{setData({...data , name : e.target.value})}} fullWidth variant="standard" />
        <TextField sx={{mb : {xs : 2, md : 4}}} required name='email' label={t('contact.form.email')} value={data.email} onChange={(e)=>{setData({...data , email : e.target.value})}} fullWidth variant="standard" />
        <TextField sx={{mb : {xs : 2, md : 4}}} required name='subject' label={t('contact.form.subject')} value={data.subject} onChange={(e)=>{setData({...data , subject : e.target.value})}} fullWidth variant="standard" />
        <TextField sx={{mb : {xs : 2, md : 4}}} 
          name='questions'
          label={t('contact.form.any')} 
          value={data.question} 
          onChange={(e)=>{setData({...data , question : e.target.value})}} 
          fullWidth 
          variant="standard"
          multiline
          rows={3}
          maxRows={8}
        />
      </ThemeProvider>
      <Button 
        type='submit'
        variant='contained' 
        sx={{
          py : {xs : 2, md : 3}, 
          px: {xs : 5, md : 8},
          mt : {xs : 2, md : 4}, 
          backgroundColor : '#fff',
          color : '#222',
          boxShadow : 'none',
          '&:hover' : {
            backgroundColor : '#e0e0e0',
            boxShadow : 'none'
          }
        }}
      >
        <EmailOutlinedIcon fontSize='small' sx={{mx : 1}}/> 
        {t('contact.form.btn')}
      </Button>
    </Box>
 )
}

export default Form
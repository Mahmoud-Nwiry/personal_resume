import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loading = ({isLoading}) => {
  return (
    <Box
        sx={{
            position : 'fixed',
            top: 0,
            left : 0,
            right : 0,
            bottom : 0,
            zIndex : 9999,
            backgroundColor : 'background.paper2', 
            display : isLoading ? 'flex' : 'none',
            alignItems : 'center',
            justifyContent : 'center',
        }}
    >
        <CircularProgress size='50px' color='primary' />
    </Box>    
  )
}

export default Loading
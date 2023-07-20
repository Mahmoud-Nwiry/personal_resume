import { Typography } from '@mui/material'
import React from 'react'

const Tag = ({tag}) => {
  return (
    <Typography sx={{
        px : 4,
        py : 3,
        mx : 1,
        transition : 'all .3s',
        '&:hover' : {
            color : 'primary.main',
            boxShadow : '1px 1px 5px rgba(50,50,50,0.2)',
            backgroundColor : 'background.paper2'
        }
    }}>#{tag}</Typography>
  )
}

export default Tag
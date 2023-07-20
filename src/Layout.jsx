import { Box, Grid, Paper } from '@mui/material'
import React from 'react'

const Layout = ({sidebar, navbar, miniNav, children }) => {
  return (
    <Box p={{md : 4, xs : 2}} mx={0} mt={{xs : 12, md : 0}} sx={{width : {xs : '100%'}}} maxWidth={{xs : '100%'}}>
        <Grid container columns={12} spacing={{md : 4, xs : 0}} overflow='visible'>
            <Grid md={0} xs={12} display={{md : 'none' }} item>
                {miniNav}
            </Grid>
            <Grid md={3} xs={12} item>
              <Paper sx={{height : '100%'}} >
                {sidebar}
              </Paper>
            </Grid>
            <Grid item md={9} xs={12}>
              {navbar}
              {children}
            </Grid>
        </Grid>
    </Box>
  )
}

export default Layout
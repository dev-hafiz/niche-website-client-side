import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './TopContact.css';


const TopContact = () => {
     return (
     <Box sx={{py:1, background:'#fff'}}>
          <Container>
          <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
          <Typography sx={{color:'#BDB099', letterSpacing:'1.5px', display:'flex', alignItems:'center'}} variant="button" display="block" gutterBottom>
          <i className="fas cIcon  fa-phone-square-alt"></i>  PHONE : +1 (2) 345 6789
          </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography sx={{color:'#BDB099', letterSpacing:'1.5px', display:'flex', alignItems:'center'}} variant="button" display="block" gutterBottom>
          <i className="fas cIcon fa-envelope"></i>  E-Mail : SUPPORT@ENGOTHEME.COM
          </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box sx={{display:'flex', justifyContent:'end'}}>
          <i className="fab tIcon fa-linkedin"></i>
          <i className="fab tIcon fa-facebook-square"></i>
          <i class="fab tIcon fa-reddit-square"></i>
          </Box>
          </Grid>
          
          </Grid>
          </Container>
     </Box>
     );
};

export default TopContact;
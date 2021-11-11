import { Button, CardMedia, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import midbanner from '../../../images/top-banner/mid-banner.png';


const NewsBanner = () => {
     return (
          <Grid style={{marginTop:'160px', marginBottom:'100px', background:'#fff'}} container spacing={2}>
          <Grid  item xs={12} md={6}>
         <Box sx={{width:'70%', margin:'0 auto'}}>
         <Typography sx={{mt:8, color:'#252525', fontWeight:'600', borderBottom: 1, width: '40%'}} variant="h5" gutterBottom component="div">
             NEWSLETTER
          </Typography>
          <Typography style={{marginTop:'40px', color:'#BDB099', lineHeight:'28px'}} variant="body1" gutterBottom>
          Keep Your email below  to receive the coupon 15% off for your first purchase via email and get informations about bicycle, accessories, tips,... and many exclusive offers.
          </Typography>
          <Box>
          <TextField 
          id="standard-basic"
          sx={{width:'100%', marginTop:'30px'}}
          label="Please enter your email"
          variant="standard"

          />
          <br/>
          <Button className="btn-submit" sx={{mt:3, background:'#1a1a1b', color:'#fff', }} variant="contained" color="primary">Subscribe</Button>
          </Box>
          <Typography sx={{marginTop:'80px', color:'#BDB099',}} variant="subtitle1" gutterBottom component="div">
          *Discount applies only to orders over $100
          </Typography>
         </Box>
          </Grid>
          <Grid sx={{background:'#B9BF9B'}} item xs={12} md={6}>
          <CardMedia
               component="img"
               style={{width:'100%', height:'100vh', marginLeft:'-16px'}}
               image={midbanner}
               alt="green iguana"
               />
          </Grid>
          </Grid>
     );
};

export default NewsBanner;
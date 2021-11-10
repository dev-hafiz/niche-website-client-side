import { Button, CardMedia, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const OurProduct = ({product}) => {
     
     const { des, img, price, title, _id} = product || {}
     return (
          <Grid item xs={12} sm={12} md={4}>
             <Paper elevation={3}>
             <CardMedia
               component="img"
               sx={{width:'50%', margin:'0 auto'}}
               image={img}
               alt="green iguana"
               />
               <Box sx={{display:'flex', justifyContent:'space-between', px:3, mt:3, mb:1}}>
               <Typography sx={{fontWeight:'500', color:'#252525'}} variant="h5" gutterBottom component="div">
                   {title}
               </Typography>
               <Typography sx={{fontWeight:'600', color:'#D1C9B9'}} variant="h4" gutterBottom component="div">
                  $ {price}
               </Typography>
               </Box>
               <Box sx={{pb:3}}>
               <Typography sx={{mx:2}} variant="body2" gutterBottom>
                {des}
               </Typography>

               <Button sx={{marginLeft:'16px', marginTop: '20px'}} variant="contained" color="inherit">BUY NOW</Button>
               </Box>
             </Paper>          
          </Grid>
     );
};

export default OurProduct;
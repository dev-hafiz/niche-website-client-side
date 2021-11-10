import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const TestProduct = ({testProduct}) => {
     const {littleTitle, title} = testProduct || {};
     return (
          <Grid sx={{my:8}} item xs={12} sm={12} md={4}>
               <Paper sx={{textAlign:'center', mb:5}}>
               <Typography sx={{fontWeight:'bold', fontSize:'14px' , paddingBottom:'8px', color:'#ACACAC'}} variant="overline" display="block" gutterBottom>
               {littleTitle}
               </Typography>

               <Typography sx={{fontWeight:'bold', paddingBottom:'20px', color:'#252525'}} variant="h5" gutterBottom component="div">
               {title}
               </Typography>
               </Paper>
          </Grid>
     );
};

export default TestProduct;
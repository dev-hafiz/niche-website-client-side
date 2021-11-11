import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const TestProduct = ({testProduct}) => {
     const {littleTitle, title} = testProduct || {};
     return (
          <Grid sx={{my:8}} item xs={12} sm={12} md={4}>
               <Paper sx={{textAlign:'center', mb:5}}>
               <Typography sx={{fontWeight:'bold', fontSize:'14px' , paddingBottom:'4px', color:'#ACACAC', paddingTop:'26px'}} variant="overline" display="block" gutterBottom>
               <i className="fas fa-2x fa-recycle"></i> {littleTitle}
               </Typography>

               <Typography sx={{fontWeight:'bold', paddingBottom:'30px', color:'#ACACAC'}} variant="h5" gutterBottom component="div">
               {title}
               </Typography>
               </Paper>
          </Grid>
     );
};

export default TestProduct;
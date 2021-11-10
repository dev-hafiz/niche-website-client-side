import { CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {

     const {orderId} = useParams();

     const [singleProduct, setSingleProduct] = useState({})

     useEffect( ()=>{
         const url = `http://localhost:5000/products/${orderId}`
         fetch(url)
         .then( res => res.json())
         .then (data => setSingleProduct(data))
     },[])


     return (
          <Container sx={{marginTop:'80px', marginBottom:'60px'}}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
          <Paper style={{display:'flex', alignItems:'center'}}  elevation={3}>
             <CardMedia
               component="img"
               sx={{width:'50%'}}
               image={singleProduct?.img}
               alt="green iguana"
               />
               <Box>
               <Box sx={{display:'flex', justifyContent:'space-between', px:3, mt:3, mb:1}}>
               <Typography sx={{fontWeight:'500', color:'#252525'}} variant="h5" gutterBottom component="div">
                   {singleProduct?.title}
               </Typography>
               <Typography sx={{fontWeight:'600', color:'#D1C9B9'}} variant="h4" gutterBottom component="div">
                  $ {singleProduct?.price}
               </Typography>
               </Box>
               <Box sx={{pb:3}}>
               <Typography sx={{mx:2}} variant="body2" gutterBottom>
                {singleProduct?.des}
               </Typography>

               </Box>
               </Box>
             </Paper>  
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
          
          </Grid>
          </Grid>
          </Container>
     );
};

export default PlaceOrder;
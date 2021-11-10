import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import OurProduct from '../OurProduct/OurProduct';

const OurProducts = () => {

     const [products, setProducts] = useState([]);

     useEffect( ()=>{
          fetch(`http://localhost:5000/products`)
          .then(res => res.json())
          .then(data => setProducts(data))
     },[])

     return (
          <Container>
               <Typography sx={{textAlign:'center', my:5, color:'#252525', fontWeight:'700'}} variant="h5" gutterBottom component="div">
                OUR PRODUCTS
               </Typography>

               <Grid sx={{my:8}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
               {
                    products.map(product => <OurProduct
                    product={product}
                    key={product._id}
                     />)  
               }
               </Grid>
          </Container>
     );
};

export default OurProducts;
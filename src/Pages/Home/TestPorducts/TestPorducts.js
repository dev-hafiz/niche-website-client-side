import { Container, Grid } from '@mui/material';
import React from 'react';
import TestProduct from '../../TestProduct/TestProduct';

const TestPorducts = () => {

     const testProducts =[
          {
               id:1,
               littleTitle :'Totally Free',
               title:'TEST PRODUCT'
          },
          {
               id:2,
               littleTitle :'For all standard offer',
               title:'FREE SHIPPING'
          },
          {
               id:3,
               littleTitle :'Only in 30 days',
               title:'FREE RETURNS'
          }
     ]
     return (
         <Container sx={{my:8}}>
               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
          {
               testProducts.map(testProduct => <TestProduct
               testProduct={testProduct}
               key={testProduct.id}
                />)
          }
          </Grid>
         </Container>
     );
};

export default TestPorducts;
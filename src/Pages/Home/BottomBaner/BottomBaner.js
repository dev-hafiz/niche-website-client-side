import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bottomBg from '../../../images/bottomBaner.png'


const bottomBannerBg  = {
     background : `url(${bottomBg})`,
     backgroundRepeat :'no-repeat',
     backgroundPosition : 'center',
     width:'100%',
     height:'150px',
     backgroundColor : 'rgb(189, 176, 153)',
     backgroundBlendMode: 'darken, luminosity',
    
}

const BottomBaner = () => {
     return (
          <Container sx={{marginTop: '160px', marginBottom:'80px'}}>
               <Box style={bottomBannerBg}>
                    <Typography sx={{textAlign:'center', display:'flex', justifyContent:'center', alignItems:'center', paddingTop:'50px', fontWeight:'700', color:'wheat'}} variant="h4">
                         Feel Free To Ride
                    </Typography>
               </Box>
          </Container>
     );
};

export default BottomBaner;
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import topBanner from '../../../images/top-banner/top-banner-cycle.png';


const appiontmentBg  = {
     background : `url(${topBanner})`,
     backgroundRepeat :'no-repeat',
     backgroundPosition : 'center',
     height: '100vh',
     backgroundColor : 'rgb(189, 176, 153)',
     backgroundBlendMode: 'darken, luminosity',
    
}

const TopBanner = () => {
     return (
          <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', mb:8}} style={appiontmentBg}>
               <Box sx={{px:2}}>
               <Typography sx={{fontWeight:'bolder', color:'#FFF', letterSpacing:'5px',}} variant="h1">
                    RIDE <br/>
                    WITH CYCLE
               </Typography>

               <NavLink style={{textDecoration:'none'}} to="/exploreProducts">
               <Button style={{background : '#fff', color:'#BDB099', marginTop:'20px'}} variant="contained"><i className="fas fa-plus"></i> <span style={{marginLeft:'10px'}}> Explore Products</span> </Button>
               </NavLink>
               </Box>
          </Box>
     );
};

export default TopBanner;
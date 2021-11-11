import { Button, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import sigLogo from '../../../images/signeture.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
     return (
          <Box sx={{background:'#9B8C73', color:'#F8FFFF', paddingTop:'60px',paddingBottom:'60px', marginTop:'160px'}}>
          <Container sx={{marginTop:'60px'}}>
          <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
          <Box>
          <Typography sx={{borderBottom:'2px dotted #eee', fontSize:'26px', width:'50%'}} variant="h6" gutterBottom component="div">
            ABOUT US
          </Typography>
          <Typography sx={{marginTop:'40px', marginBottom:'50px', fontSize:'14px', lineHeight:'28px', }} variant="body2" gutterBottom>
          We are Sunrise team - a team of enthusiastic designers, marketers and developers who are specialized in creating professional premium WordPress themes.

          <br/>
          Our mission is to build user–friendly, clean and modern designs in order to help more users improve their livelihood.
          </Typography>

          <Box>
          <CardMedia
          component="img"
          sx={{width:"50%"}}
          image={sigLogo}
          alt="green iguana"
          />
          </Box>
          </Box>
          </Grid>
          <Grid item xs={12} md={3}>
          <Typography sx={{ fontSize:'16px', width:'50%'}} variant="h6" gutterBottom component="div">
          INFORMATION
          </Typography>
          <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
          <Box style={{lineHeight:'16px', marginTop:'40px'}}>
          <p><NavLink style={{color:'#eee'}} to="/home">FAQs</NavLink></p>
          <p><NavLink style={{color:'#eee'}} to="/home">Size Guide</NavLink></p>
          <p><NavLink style={{color:'#eee'}} to="/home">Delivery INFO</NavLink></p>
          <p><NavLink style={{color:'#eee'}} to="/home">Return INFO</NavLink></p>
          <p><NavLink style={{color:'#eee'}} to="/home">Discount</NavLink></p>
          <p><NavLink style={{color:'#eee'}} to="/home">Gift</NavLink></p>
          </Box>
          </Grid> 
          <Grid item xs={12} md={6}>
          <Box style={{lineHeight:'16px', marginTop:'40px'}}>
          <p><NavLink style={{color:'#eee', textDecoration:'none'}} to="/home">My Wishlist</NavLink></p>
          <p><NavLink style={{color:'#eee', textDecoration:'none'}} to="/home">Our Stores</NavLink></p>
          <p><NavLink style={{color:'#eee', textDecoration:'none'}} to="/home">HELP</NavLink></p>
          <p><NavLink style={{color:'#eee', textDecoration:'none'}} to="/home">Cutomize</NavLink></p>
          <p><NavLink style={{color:'#eee', textDecoration:'none'}} to="/home">iOS APP</NavLink></p>
          <p><NavLink style={{color:'#eee', textDecoration:'none'}} to="/home">Android APP</NavLink></p>
          </Box>
          </Grid> 
          </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
          <Typography sx={{ fontSize:'16px', width:'50%'}} variant="h6" gutterBottom component="div">
          NEWSLETTER
          </Typography>
          <Typography sx={{marginTop:'40px', marginBottom:'10px', fontSize:'14px', lineHeight:'28px'}} variant="body2" gutterBottom>
          Enter your email and we'll send you a coupon with 10% off your next order.
          </Typography>

          <Box>
          <TextField sx={{border:'2px dotted #eee',}} id="outlined-basic" label="Enter Your Email" variant="outlined" />
          <br/>
          <Button className="btn-submit" sx={{mt:2, background:'#1a1a1b', color:'#fff', }} variant="contained" color="primary">Enter press</Button>
          </Box>
          </Grid>
     
          <Grid item xs={12} md={3}>
          <Typography sx={{ fontSize:'16px', width:'50%'}} variant="h6" gutterBottom component="div">
          CONTACT US
          </Typography>
          <Typography sx={{marginTop:'40px', marginBottom:'10px', fontSize:'14px', lineHeight:'28px', fontStyle:'italic'}} variant="body2" gutterBottom>
          PO Box CT16122 Collins Street West, Victoria 8007, Australia.
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
           Phone: +1 (2) 345 6789
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
          Fax: +1 (2) 345 6789
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
          Email: support@engotheme.com
          </Typography>

          <Box>
          <i className="fab icon fa-linkedin-in"></i>
          <i className="fab icon fa-twitter"></i>
          <i className="fab icon fa-facebook"></i>
          <i className="fab icon fa-reddit"></i>
          </Box>
          </Grid>
           </Grid>
         </Container>
          </Box>
     );
};

export default Footer;
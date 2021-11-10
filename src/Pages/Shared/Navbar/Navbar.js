import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import webLogo from '../../../images/top-banner/web-logo.png';
import CardMedia from '@mui/material/CardMedia';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Navbar = () => {

    const {user, logOut} = useFirebase()

     return (
          <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar sx={{ background:'#fff', color:'#C9BFAC', py:2}}>
              
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <CardMedia
                  component="img"
                  sx={{width:"110px"}}
                  image={webLogo}
                  alt="Paella dish"
                />
              </Typography>

              <NavLink style={{textDecoration:'none', color:'#BDB099', marginRight:'20px'}}  to="/home">
              Home
              </NavLink>
              {user.email && <NavLink style={{textDecoration:'none', color:'#BDB099', marginRight:'20px'}}  to="/dashboard">
              DashBoard
              </NavLink>}
              {user.email ? 
                <Button onClick={logOut} color="inherit" variant="outlined">Logout</Button>
                :
                <NavLink style={{textDecoration:'none', color:'#BDB099'}} to="/login">
                <Button color="inherit">Login</Button>
              </NavLink>}
              
            </Toolbar>
          </AppBar>
        </Box>
     );
};

export default Navbar;
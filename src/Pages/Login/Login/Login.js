import { Container, Grid, Typography ,  TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import loginImg from '../../../images/login.png';
import useFirebase from '../../../hooks/useFirebase';


const Login = () => {

     const {loginUser, user, isLoading,
          authError} = useFirebase()

     const location = useLocation()
     const history = useHistory()
     const [loginData, setLoginData] = useState({})

     const handleChange = e =>{
          const filed = e.target.name;
          const value = e.target.value;
          const newLoginData = {...loginData}
          newLoginData[filed] = value;
          
          setLoginData(newLoginData);
     }
     const handleLoginSubmit = e =>{

          loginUser(loginData.email, loginData.password, location, history)
          e.preventDefault();
          
     }
     return (
          <Container sx={{my:8}}>
          <Grid container spacing={2}>
          <Grid sx={{background:'#9DBEC1'}} item xs={12} md={6} lg={6}>
          <img style={{width:'100%', paddingBottom:'70px'}} src={loginImg} alt="" />
          </Grid>

          <Grid sx={{textAlign:'center'}} item xs={12} md={6} lg={6}>
          <Box>
          <Typography sx={{fontWeight:'bold', color:'#252525', mt:5}} variant="h4">
               PLEASE LOGIN 
          </Typography>
          
          <form onSubmit={handleLoginSubmit}>
          <TextField 
          required
          sx={{width:"75%", mt:5}}
          id="standard-basic" 
          label="Your Email" 
          name="email"
          type="email"
          onChange={handleChange}
          variant="standard" />

          <TextField 
          required
          sx={{width:"75%" , mt:5}}
          id="standard-basic" 
          label="Password" 
          name="password"
          onChange={handleChange}
          type="password"
          variant="standard" />
          <br />
          <Button sx={{width:"75%", mt:5, background:'#BDB099'}} variant="contained" color="inherit" type="submit">Login</Button>
          </form>

          <NavLink style={{textDecoration:'none'}} to="/register">
          <Button  variant="text">Don't have an account? register</Button>
          </NavLink>

          {isLoading && <CircularProgress />}
         {user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>}
         { authError && <Alert severity="error">{authError}</Alert>}
          </Box>
          </Grid>
          </Grid>
          </Container>
     );
};

export default Login;
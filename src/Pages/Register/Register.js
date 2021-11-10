import { Container, Grid, Typography ,  TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink , useHistory} from 'react-router-dom';
import loginImg from '../../../src/images/login.png';
import useAuth from '../../hooks/useAuth';


const Register = () => {

     const {registerUser, isLoading, authError, user } = useAuth()
     const history = useHistory()
     const [loginData, setLoginData] = useState({})

     const handleChange = e =>{
          const filed = e.target.name;
          const value = e.target.value;
          const newLoginData = {...loginData}
          newLoginData[filed] = value;
          console.log(newLoginData)
          setLoginData(newLoginData);
     }
     const handleLoginSubmit = e =>{

          if(loginData.password !== loginData.password2){
               alert('Your password did not match');
               return
          }

          registerUser(loginData.email, loginData.password,  loginData.name, history)
          e.preventDefault();
          
     }

     return (
          <Container sx={{my:8}}>
          <Grid container spacing={2}>
          <Grid sx={{background:'#9DBEC1'}} item xs={12} md={6} lg={6}>
          <img style={{width:'100%', paddingBottom:'70px'}} src={loginImg} alt="" />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
          <Box sx={{textAlign:'center'}}>
          <Typography sx={{fontWeight:'bold', color:'#252525', mt:5}} variant="h4">
               PLEASE REGISTER
          </Typography>
          
          {!isLoading && <form onSubmit={handleLoginSubmit}>
          <TextField 
          required
          sx={{width:"75%", mt:3}}
          id="standard-basic" 
          label="Your Name" 
          name="name"
          type="text"
          onChange={handleChange}
          variant="standard" />
          <TextField 
          required
          sx={{width:"75%", mt:3}}
          id="standard-basic" 
          label="Your Email" 
          name="email"
          type="email"
          onChange={handleChange}
          variant="standard" />

          <TextField 
          required
          sx={{width:"75%" , mt:3}}
          id="standard-basic" 
          label="Password" 
          name="password"
          onChange={handleChange}
          type="password"
          variant="standard" />
          <TextField 
          required
          sx={{width:"75%" , mt:3}}
          id="standard-basic" 
          label="Re Type Password" 
          name="password2"
          onChange={handleChange}
          type="password"
          variant="standard" />
          <br />
          <Button sx={{width:"75%", mt:5, background:'#BDB099', color:'#252525', fontWeight:'bold'}} variant="contained" color="inherit" type="submit">Register</Button>
          </form>}

          <NavLink style={{textDecoration:'none'}} to="/login">
          <Button  variant="text">Already have an account? login</Button>
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

export default Register;
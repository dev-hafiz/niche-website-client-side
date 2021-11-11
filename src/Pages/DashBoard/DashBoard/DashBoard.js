import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link,
     useParams,
     useRouteMatch,
     NavLink
   } from "react-router-dom";
import { Button } from '@mui/material';
import MyOrders from '../../MyOrders/MyOrders';
import Payment from './Payment/Payment';
import useAuth from '../../../hooks/useAuth';
import UsersReview from '../UsersReview/UsersReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProducts from '../AddProducts/AddProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 240;

function DashBoard(props) {

  const {logOut, admin} = useAuth()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div  style={{paddingLeft:'10px', marginTop:'30px'}}>
      <Toolbar/>
      
      
          <Box >
           <Button sx={{border:'1px solid #1a1a1b'}} onClick={logOut} variant="outlined" color="inherit">Log Out</Button>
          <br/>
          
          <NavLink style={{textDecoration:'none', color:'#1a1a1b'}} to="/home">
               <Button variant="text" color="inherit">Home</Button>
          </NavLink>
          <br/>
          
          
          
          {admin ? <Box>
          <NavLink style={{textDecoration:'none', color:'#1a1a1b'}} to={`${url}/makeAdmin`}>
               <Button variant="text" color="inherit">Make Admin</Button>
          </NavLink>
          <br/>
          <NavLink style={{textDecoration:'none', color:'#1a1a1b'}} to={`${url}/addProducts`}>
               <Button variant="text" color="inherit">Add Products</Button>
          </NavLink>
          <br/>
          <NavLink style={{textDecoration:'none', color:'#1a1a1b'}} to={`${url}/manageAllOrders`}>
               <Button variant="text" color="inherit">Manage All Orders</Button>
          </NavLink>
          <br/>
          <NavLink style={{textDecoration:'none', color:'#1a1a1b'}} to={`${url}/manageAllProducts`}>
               <Button variant="text" color="inherit">Manage All Products</Button>
          </NavLink>
          <br/>
          </Box> :
          <Box>
          <NavLink style={{textDecoration:'none', color:'#1a1a1b'}} to={`${url}`}>
               <Button variant="text" color="inherit">My Orders</Button>
          </NavLink>
          <br/>
          <NavLink style={{textDecoration:'none', color:'#1a1a1b'}} to={`${url}/payment`}>
               <Button variant="text" color="inherit">Your Payment</Button>
          </NavLink>
          <br/>
          <NavLink style={{textDecoration:'none', color:'#1a1a1b'}} to={`${url}/userReview`}>
               <Button variant="text" color="inherit">User Review</Button>
          </NavLink>
          <br/>
          </Box>
          }
          
          </Box>
          
       
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{background:'#252525', paddingBottom:'20px'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <MyOrders/>
        </Route>
        <Route path={`${path}/payment`}>
          <Payment/>
        </Route>
        <Route path={`${path}/userReview`}>
          <UsersReview/>
        </Route>
        <Route path={`${path}/makeAdmin`}>
          <MakeAdmin/>
        </Route>
        <Route path={`${path}/addProducts`}>
          <AddProducts/>
        </Route>
        <Route path={`${path}/manageAllOrders`}>
          <ManageAllOrders/>
        </Route>
        <Route path={`${path}/manageAllProducts`}>
          <ManageProducts/>
        </Route>
      </Switch>
        
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;

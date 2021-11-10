import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import ExploreProducts from './Pages/Home/ExploreProducts/ExploreProducts';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/myOrders">
              <MyOrders/>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard/>
            </PrivateRoute>
            <PrivateRoute path="/placeOrder/:orderId">
              <PlaceOrder/>
            </PrivateRoute>
            <Route path="/exploreProducts">
              <ExploreProducts/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
           </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;

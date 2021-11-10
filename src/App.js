import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
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
            <Route path="/dashboard">
              <DashBoard/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
           </Switch>
      </Router>
    </div>
  );
}

export default App;

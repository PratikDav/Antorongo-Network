import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';

import OrderList from './Components/AdminPanal/OrderList/OrderList';
import Admin from './Components/AdminPanal/Admin/Admin';
import ManageService from './Components/AdminPanal/ManageService/ManageService';
import MakeAdmin from './Components/AdminPanal/MakeAdmin/MakeAdmin';

import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/login';
import OrderView from './Components/OrderView/OrderView';
import CustomerOrder from './Components/Customar/CustomerOrder/CustomerOrder';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] =  useState({});


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="App">
    <Router>
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
           <Route path="/manageServices">
            <ManageService />
          </Route>
           <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>
           <Route path="/admin">
            <Admin />
          </Route>
           <Route path="/orderList">
            <OrderList />
          </Route>
          <Route path="/orderView/:id">
            <OrderView/>
          </Route>
          <Route path="/customerOrder">
              <CustomerOrder />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
         
          
          
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

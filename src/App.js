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
import Payment from './Components/Customar/Payment/Payment';
import Review from './Components/Customar/Review/Review';
import NotFound from './Components/Home/NotFound/NotFound';


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

            <PrivateRoute path="/manageServices">
              <ManageService />
            </PrivateRoute>

            <PrivateRoute path="/makeAdmin">
              <MakeAdmin />
            </PrivateRoute>

            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>

            <PrivateRoute path="/orderList">
              <OrderList />
            </PrivateRoute>

            <PrivateRoute path="/orderView/:id">
              <OrderView/>
            </PrivateRoute>

            <PrivateRoute path="/payment">
                <Payment />
            </PrivateRoute>

            <PrivateRoute path="/review">
                <Review />
            </PrivateRoute>

            <PrivateRoute path="/bookingList">
                <CustomerOrder />
            </PrivateRoute>

            <Route exact path="/">
              <Home />
            </Route>
            
            <Route path="/home">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          
            
            
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

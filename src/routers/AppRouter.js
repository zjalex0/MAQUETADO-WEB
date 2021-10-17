import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { startChecking } from '../actions/auth';

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { Home } from '../views/Home.js';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth );
    
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    if (checking) {
        return (<h4>loanding...</h4>)
    }
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact 
                    path="/login" 
                    component={ LoginScreen }
                    isAuthenticated={ !!uid } />    

                    <PublicRoute exact 
                    path="/register" 
                    component={ RegisterScreen }
                    isAuthenticated={ !!uid } />  

                    <PrivateRoute 
                    exact 
                    path="/" 
                    component={ Home } 
                    isAuthenticated={ !!uid } />      

                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>
    )
}

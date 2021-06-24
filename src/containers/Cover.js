import React,{Component} from 'react';
import LandingPage from './LandingPage/LandingPage';
import LoginPage from './LoginPage/LoginPage';
import Dashboard from './Dashboard/Dashboard';
import {Route,Switch} from 'react-router-dom';
import {AnimatePresence,motion} from 'framer-motion';
import RegistrationPage from './RegistrationPage/RegistrationPage';
import SuperAdmin from './SuperAdmin/SuperAdmin';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import CompanyLogin from './CompanyLogin/CompanyLogin';
import LoginTest from './LoginPageNew/LoginPage.js';



class Cover extends Component{
    render(){
        return(
            <div>
              
                <AnimatePresence>
                    <Switch>
                        <Route path="/" exact component={Dashboard} />

                        
                    </Switch>
                    
                </AnimatePresence>
               
            </div>
        )
    }
}


export default Cover
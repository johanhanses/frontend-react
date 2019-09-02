import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import Main from './components/main';
import NavBar from './components/navBar';
import About from './components/about';
import NotFound from './components/notFound';
import Report from './components/report';
import Week from './components/week';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';

import './App.css';



function App() {
  return (
    <React.Fragment>
        {/* <ToastContainer /> */}
        <NavBar />
        <main className="container">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/about" component={About} />
                <Route path="/report" component={Report} />
                <Route path="/week/:id" component={Week} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/login" component={LoginForm} />

                {/* <ProtectedRoute 
                    path="/movies/:id" 
                    component={MovieForm}
                /> */}
                {/* <Route 
                    path="/movies" 
                    render={props => <Movies {...props} user={user}/> } 
                /> */}
                {/* <Route path="/customers" component={Customers} />
                <Route path="/rentals" component={Rentals} /> */}
                <Route path="/not-found" component={NotFound} />
                {/* <Redirect from="/" exact to="/movies" /> */}
                {/* <Redirect to="/not-found" /> */}
            </Switch>
        </main>
    </React.Fragment>
  );
}

export default App;

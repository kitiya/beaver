import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Providers from './components/provider/Providers';
import Users from './components/user/Users';
import NotFound from './components/NotFound'
import './App.css';

const App = () => (
    <BrowserRouter>
        <main>
            <Header />
            <Switch>
                <Redirect from="/home" to="/" />
                <Route exact path="/" component={Home} />
                <Route path="/providers" component={Providers} />
                <Route path="/users" component={Users} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </main>
    </BrowserRouter>
);

export default App;
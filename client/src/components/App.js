import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ThemeContextProvider from '../contexts/ThemeContext';
import AuthContextProvider from '../contexts/AuthContext';

import Header from './shared/Header';
import Footer from './shared/Footer';
import Home from './Home';

import ActivityMainPage from './activity/ActivityMainPage';
import Activity from './activity/Activity';
import Providers from './provider/Providers';
import ProviderDetails from './provider/ProviderDetails';
import AddProvider from './provider/AddProvider';
import EventMainPage from './event/EventMainPage';
import ThingsToDoMainPage from './things-to-do/ThingsToDoMainPage';
import Users from './user/Users';
import Tutorials from './tutorial/Tutorials';
import GreetingClass from './tutorial/GreetingClass';
import GreetingHooks from './tutorial/GreetingHooks';

import NotFound from './shared/NotFound'

import '../static/styles/App.css';
import '../static/styles/styles.css';

const App = () => (
    <Router>
        <ThemeContextProvider>
            <AuthContextProvider>
                <main>
                    <Header />
                    <Switch>
                        <Redirect from="/home" to="/" />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/activities" component={ActivityMainPage} />
                        <Route path="/activity/:id" component={Activity} />
                        <Route exact path="/providers" component={Providers} />
                        <Route path="/provider/:id" component={ProviderDetails} />
                        <Route path="/providers/new" component={AddProvider} />
                        <Route exact path="/events" component={EventMainPage} />
                        <Route exact path="/things-to-do" component={ThingsToDoMainPage} />
                        <Route path="/users" component={Users} />
                        <Route exact path="/tutorials" component={Tutorials} />
                        <Route path="/tutorials/greeting_class" component={GreetingClass} />
                        <Route path="/tutorials/greeting_hooks" component={GreetingHooks} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </main>
            </AuthContextProvider>
        </ThemeContextProvider>
    </Router>
);

export default App;
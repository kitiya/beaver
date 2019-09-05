import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ThemeContextProvider from '../contexts/ThemeContext';
import AuthContextProvider from '../contexts/AuthContext';

import Header from './common/Header';
import Footer from './common/Footer';
import Home from './home/Home';

import ActivityMainPage from './activity/ActivityMainPage';
import ActivityDetail from './activity/ActivityDetail';
import AddActivity from './activity/AddActivity';
import EditActivity from './activity/EditActivity';
import ProviderMainPage from './provider/ProviderMainPage';
import ProviderDetail from './provider/ProviderDetail';
import AddProvider from './provider/AddProvider';
import EventMainPage from './event/EventMainPage';
import ThingsToDoMainPage from './things-to-do/ThingsToDoMainPage';
import ThingsToDoDetail from './things-to-do/ThingsToDoDetail';
import Users from './user/Users';
import Tutorials from './tutorial/Tutorials';
//import MapContainer from './util/MapContainer';

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
                        <Route exact path="/activity/:id" component={ActivityDetail} />
                        <Route path="/activities/new" component={AddActivity} />
                        <Route path="/activity/:id/edit" component={EditActivity} />
                        <Route exact path="/providers" component={ProviderMainPage} />
                        <Route path="/provider/:id" component={ProviderDetail} />
                        <Route path="/providers/new" component={AddProvider} />
                        <Route exact path="/things-to-do" component={ThingsToDoMainPage} />
                        <Route path="/things-to-do/:id" component={ThingsToDoDetail} />
                        <Route exact path="/events" component={EventMainPage} />
                        <Route path="/users" component={Users} />
                        <Route exact path="/tutorials" component={Tutorials} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </main>
            </AuthContextProvider>
        </ThemeContextProvider>
    </Router>
);

export default App;
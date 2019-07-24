import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ThemeContextProvider from './contexts/theme-context/ThemeContext';
import AuthContextProvider from './contexts/auth-context/AuthContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

import ActivityView from './components/activity/ActivityView';
import Activity from './components/activity/Activity';
import Providers from './components/provider/Providers';
import ProviderDetails from './components/provider/ProviderDetails';
import AddProvider from './components/provider/AddProvider';
import Users from './components/user/Users';
import Tutorials from './components/tutorial/Tutorials';
import GreetingClass from './components/tutorial/GreetingClass';
import GreetingHooks from './components/tutorial/GreetingHooks';
import NotFound from './components/NotFound'
import './App.css';

const App = () => (
    <Router>
        <ThemeContextProvider>
            <AuthContextProvider>
                <main>
                    <Header />
                    <Switch>
                        <Redirect from="/home" to="/" />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/activities" component={ActivityView} />
                        <Route path="/activity/:id" component={Activity} />
                        <Route exact path="/providers" component={Providers} />
                        <Route path="/provider/:id" component={ProviderDetails} />
                        <Route path="/providers/new" component={AddProvider} />
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
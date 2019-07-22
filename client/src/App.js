import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import ThemeContextProvider from './contexts/theme-context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ActivityView from './components/activity/ActivityView';
import Activity from './components/activity/Activity';
import Providers from './components/provider/Providers';
import Users from './components/user/Users';
import Tutorials from './components/tutorial/Tutorials';
import GreetingClass from './components/tutorial/GreetingClass';
import GreetingHooks from './components/tutorial/GreetingHooks';
import NotFound from './components/NotFound'
import './App.css';

const App = () => (
    <BrowserRouter>
        <ThemeContextProvider>
            <main>
                <Header />
                <Switch>
                    <Redirect from="/home" to="/" />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/activities" component={ActivityView} />
                    <Route path="/activity/:id" component={Activity} />
                    <Route path="/providers" component={Providers} />
                    <Route path="/users" component={Users} />
                    <Route exact path="/tutorials" component={Tutorials} />
                    <Route path="/tutorials/greeting_class" component={GreetingClass} />
                    <Route path="/tutorials/greeting_hooks" component={GreetingHooks} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </main>
        </ThemeContextProvider>
    </BrowserRouter>
);

export default App;
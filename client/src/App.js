import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ActivityView from './components/activity/ActivityView';
import Activity from './components/activity/Activity';
import Providers from './components/provider/Providers';
import Users from './components/user/Users';
import ReactConf2018 from './components/react-conf-2018/ReactConf2018';
import GreetingClass from './components/react-conf-2018/GreetingClass';
import GreetingHooks from './components/react-conf-2018/GreetingHooks';
import NotFound from './components/NotFound'
import './App.css';

const App = () => (
    <BrowserRouter>
        <main>
            <Header />
            <Switch>
                <Redirect from="/home" to="/" />
                <Route exact path="/" component={Home} />
                <Route exact path="/activities" component={ActivityView} />
                <Route path="/activity/:id" component={Activity} />
                <Route path="/providers" component={Providers} />
                <Route path="/users" component={Users} />
                <Route path="/react-conf-2018" component={ReactConf2018} />
                <Route path="/conf18/greeting_class" component={GreetingClass} />
                <Route path="/conf18/greeting_hooks" component={GreetingHooks} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </main>
    </BrowserRouter>
);

export default App;
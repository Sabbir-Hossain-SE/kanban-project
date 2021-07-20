import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Onboarding from './pages/Onboarding/Onboarding';

const App = () => (
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={Onboarding} />
    </Switch>
);

export default App;

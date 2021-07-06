import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Onboarding from './pages/Onboarding/Onboarding';

const App = () => (
    <Switch>
        <Route path="/onboarding" component={Onboarding} />
        <Route path="/home" component={Home} />
    </Switch>
);

export default App;

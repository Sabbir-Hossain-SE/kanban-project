import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddProject from './pages/AddProject/AddProject';
import Home from './pages/Home/Home';
import Onboarding from './pages/Onboarding/Onboarding';

const App = () => (
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/create-project" component={AddProject} />
        <Route path="/" component={Onboarding} />
    </Switch>
);

export default App;

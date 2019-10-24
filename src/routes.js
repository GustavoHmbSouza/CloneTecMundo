import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import main from './pages/main';
import repository from './pages/ultimasNoticias';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={main} />
                <Route path="/ultimasNoticias" component={repository} />
            </Switch>
        </BrowserRouter>
    );
}

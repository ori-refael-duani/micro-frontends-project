import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
// import MarketingApp from './components/MarketingApp';
// import AuthApp from './components/AuthApp';

const MarketingLazyApp = lazy(() => import('./components/MarketingApp'));
const AuthLazyApp = lazy(() => import('./components/AuthApp'));

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {/* <Route path="/auth" component={AuthApp} />
                    <Route path="/" component={MarketingApp} /> */}
                    <Route path="/auth" component={AuthLazyApp} />
                    <Route path="/" component={MarketingLazyApp} />
                </Switch>
                </Suspense>
            </div>
        </BrowserRouter>
    );
};
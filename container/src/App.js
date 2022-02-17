import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
// import MarketingApp from './components/MarketingApp';
// import AuthApp from './components/AuthApp';

const MarketingLazyApp = lazy(() => import('./components/MarketingApp'));
const AuthLazyApp = lazy(() => import('./components/AuthApp'));

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <BrowserRouter>
            <div>
                <Header isSignedIn={isSignedIn} onSignOut={() => {
                    console.log("User signed out");
                    setIsSignedIn(false);
                }} />
                <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {/* <Route path="/auth" component={AuthApp} />
                    <Route path="/" component={MarketingApp} /> */}
                    {/* <Route path="/auth" component={AuthLazyApp} /> */}
                    <Route path="/auth">
                        <AuthLazyApp onSignIn={() => {
                            console.log("User signed in"); 
                            setIsSignedIn(true); 
                        }} />
                    </Route>
                    <Route path="/" component={MarketingLazyApp} />
                </Switch>
                </Suspense>
            </div>
        </BrowserRouter>
    );
};
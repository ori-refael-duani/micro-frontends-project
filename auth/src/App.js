import React from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import SignIn from './components/Signin';
import SignUp from './components/Signup';

export default ({ history, onSignIn }) => {
    // Used Router and history prop to work with custom history
    return (
        <div>
            <StylesProvider>
                <Router history={history}> 
                    <Switch>
                        {/* <Route path="/auth/signin" component={SignIn} />
                        <Route path="/auth/signup" component={SignUp} /> */}

                        {/* <Route path="/auth/signin" component={SignIn} />
                        <Route path="/auth/signup" component={SignUp} /> */}
                        {/* Refactor for passing props to the components */}
                        <Route path="/auth/signin">
                            <SignIn onSignIn={onSignIn} />
                        </Route>
                        <Route path="/auth/signup">
                            <SignUp onSignIn={onSignIn} />
                        </Route>
                        {/* <Route exact path="/">
                            <Redirect to="/auth/signin" />
                        </Route> */}
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
}
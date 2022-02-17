import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history'; // Used & installed by react router & react router dom
import App from './App';

console.log("auth");

const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
    // Use default history, which is actually a browser history, if micro frontend is in isolation, otherwise, create a new memeory history
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} onSignIn={onSignIn} />,
        el
    );

    return {
        onParentNavigate({ pathname: nextPathname }) {
            console.log("container navigate");
            const { pathname: currentPathname } = history.location;

            if (currentPathname !== nextPathname) {
                console.log("auth changes route");
                history.push(nextPathname);
            }
        }
    }
};

// Isolation
if (process.env.NODE_ENV === 'development') {
    const authDevRoot = document.querySelector('#_auth-dev-root');
    if (authDevRoot) {
        mount(authDevRoot, { defaultHistory: createBrowserHistory() });
    }
}

export { mount };
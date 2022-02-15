import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history'; // Used & installed by react router & react router dom
import App from './App';

console.log("marketing");

const mount = (el, { onNavigate, defaultHistory }) => {
    // Use default history, which is actually a browser history, if micro frontend is in isolation, otherwise, create a new memeory history
    const history = defaultHistory || createMemoryHistory();

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} />,
        el
    );

    return {
        onParentNavigate({ pathname: nextPathname }) {
            console.log("container navigate");
            const { pathname: currentPathname } = history.location;

            if (currentPathname !== nextPathname) {
                console.log("marketing changes route");
                history.push(nextPathname);
            }
        }
    }
};

// Isolation
if (process.env.NODE_ENV === 'development') {
    const marketingDevRoot = document.querySelector('#_marketing-dev-root');
    if (marketingDevRoot) {
        mount(marketingDevRoot, { defaultHistory: createBrowserHistory() });
    }
}

export { mount };
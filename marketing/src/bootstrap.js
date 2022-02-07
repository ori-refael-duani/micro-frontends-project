import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

console.log("marketing");

const mount = (el) => {
    ReactDOM.render(
        // <h1>Marketing</h1>,
        <App />,
        el
    );
};

if (process.env.NODE_ENV === 'development') {
    const marketingDevRoot = document.querySelector('#_marketing-dev-root');
    if (marketingDevRoot) {
        mount(marketingDevRoot);
    }
}

export { mount };
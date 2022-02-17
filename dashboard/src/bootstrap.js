import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

console.log("auth");

const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

// Isolation
if (process.env.NODE_ENV === 'development') {
    const authDevRoot = document.querySelector('#_dashboard-dev-root');
    if (authDevRoot) {
        mount(authDevRoot);
    }
}

export { mount };
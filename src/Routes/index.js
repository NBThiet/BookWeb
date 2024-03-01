// layout
import routes from '../config/routes';
// pages
import Home from '../pages/Home';
import Library from '../pages/Library';

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.library, component: Library },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

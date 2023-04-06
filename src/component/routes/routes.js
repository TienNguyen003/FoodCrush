import routesConfig from '../config/routes';

// pages
import Home from '../Pages/Home/home';
import Detail from '../Pages/Detail/detail';

// public routes
const publicRoutes = [
    { path: routesConfig.Home, component: Home },
    { path: routesConfig.Detail, component: Detail },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };

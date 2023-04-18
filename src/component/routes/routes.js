import routesConfig from '../config/routes';

// pages
import Home from '../Pages/Home/home';
import Detail from '../Pages/Detail/detail';
import SeeDetails from '../Pages/SeeDetails/seedetail';
import Blogger from '../Pages/Blogger/blogger';

// public routes
const publicRoutes = [
    { path: routesConfig.Home, component: Home },
    { path: routesConfig.Detail, component: Detail },
    { path: routesConfig.SeeDetails, component: SeeDetails },
    { path: routesConfig.Blogger, component: Blogger },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };

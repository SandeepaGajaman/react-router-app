import About from "../pages/about";
import Home from "../pages/home";

export const routes = [
    { path: '/', page: <Home/>, name: 'Home' },
    { path: '/about', page: <About/>, name: 'About'}
];
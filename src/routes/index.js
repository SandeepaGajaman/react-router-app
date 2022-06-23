import About from "../pages/about";
import Counter from "../pages/counter";
// import Checker from "../pages/counter/checker";
import Home from "../pages/home";

export const routes = [
    { path: '/', page: <Home/>, name: 'Home' },
    { path: '/about', page: <About/>, name: 'About'},
    { path: '/counter', page: <Counter/>, name: 'Counter'},
    // { path: '/checker', page: <Checker/>, name: 'Checker'}
];
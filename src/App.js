import { Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import { routes } from './routes';

function App() {
  return (
    <div>
      <Menu/>
      <Routes>
        {routes.map((route) => {
          return(
            <Route key={route.path} path={route.path} element={route.page}/>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;

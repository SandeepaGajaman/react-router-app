import { Link } from 'react-router-dom';
import { routes } from '../../routes';

const Menu = () => {
    return (
        <div>
            {routes.map((route) => {
                return (
                    <div key={route.path}>
                        <Link to={route.path}>
                            {route.name}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Menu;
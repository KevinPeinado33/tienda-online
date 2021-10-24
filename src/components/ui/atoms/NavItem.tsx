import { Nav } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

import { RoutesName } from '../../../config/typeRoutes';

interface Props {
    path: RoutesName;
    name: string;
    disabled?: boolean;
}

export const NavItem = ( { path, name, disabled = false } : Props )  => {
    return (
        <Nav.Item>
            <Nav.Link 
                as={NavLink}
                to={path}
                disabled={disabled}>
                    { name }
            </Nav.Link>
        </Nav.Item>
    )
}

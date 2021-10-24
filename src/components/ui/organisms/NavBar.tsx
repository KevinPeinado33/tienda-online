import { Nav } from 'react-bootstrap';

import { NavItem } from '../atoms/NavItem';

export const NavBar = () => {
    return (
        <Nav
            activeKey='/home'
        >
            <NavItem path='/home' name='Home' />
            <NavItem path='/my-publications' name='Mis Publicaciones' />
            <NavItem path='/sign-in' name='Configuración' disabled />
        </Nav>
    )
}

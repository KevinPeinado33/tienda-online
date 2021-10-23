import { Nav } from 'react-bootstrap';

import { NavItem } from '../atoms/NavItem';

export const NavBar = () => {
    return (
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <NavItem path='/home' name='Home' />
            <NavItem path='/home' name='Mis Publicaciones' />
            <NavItem path='/home' name='Configuración' disabled />

        </Nav>
    )
}

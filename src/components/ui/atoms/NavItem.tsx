import { Nav } from 'react-bootstrap';

interface Props {
    path: string;
    name: string;
    disabled?: boolean;
}

export const NavItem = ( { path, name, disabled = false } : Props )  => {
    return (
        <Nav.Item>
            <Nav.Link 
                href={ path }
                disabled={disabled}>
                    { name }
            </Nav.Link>
        </Nav.Item>
    )
}

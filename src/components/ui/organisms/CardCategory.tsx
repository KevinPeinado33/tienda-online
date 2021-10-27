import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

interface Props {
    title:       string;
    idCategory:  number;
}

export const CardCategory = ( { title, idCategory }: Props ) => {
    
    const history = useHistory();

    return (
        <Card onClick={() => history.push(`/${idCategory}`)}>
            <Card.Title>
                { title }
            </Card.Title>
        </Card>
    )
}

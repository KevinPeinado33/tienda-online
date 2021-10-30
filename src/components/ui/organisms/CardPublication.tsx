import { Card } from 'react-bootstrap';

interface Props {
    image:       string;
    title:       string;
    description: string;
    createAt:    string;
}

export const CardPublication = ( { image, title, description, createAt }: Props ) => {
    return (
        <Card style={{ width: '18rem', marginRight: 20 }}>
            <Card.Img variant='top' src={ image } />
            <Card.Body>
                <Card.Title>
                    { title }
                </Card.Title>
                <Card.Text>
                    { description }
                </Card.Text>
                <Card.Text>
                    Fecha publicada: { createAt.substring(0,10) }
                </Card.Text>
                <Card.Footer>
                    <small className='text-muted'>
                        Publicado por: { createAt }
                    </small>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

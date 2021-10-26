import { Card } from 'react-bootstrap';

interface Props {
    image:       string;
    title:       string;
    description: string;
    createAt:    string;
}

export const CardPublication = ( { image, title, description, createAt }: Props ) => {
    return (
        <Card>
            <Card.Img variant='top' src={ image } />
            <Card.Body>
                <Card.Title>
                    { title }
                </Card.Title>
                <Card.Text>
                    { description }
                </Card.Text>
                <Card.Footer>
                    <small className='text-muted'>
                        { createAt }
                    </small>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

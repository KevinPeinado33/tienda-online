import { Card, Form , Row, Col } from 'react-bootstrap';

export const MyPublicationPage = () => {
    return (
        <div className="mt-4">
            <h2>Mis Publicaciones</h2>
            <Card className='mt-4'>
                <Card.Body>
                    <Form>
                        <Row>
                            <Col sm>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Titulo</Form.Label>
                                    <Form.Control 
                                        type='text' 
                                        placeholder='Se intercambia o vende ...' />
                                </Form.Group>
                            </Col>
                            <Col sm>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control 
                                        type='text' 
                                        placeholder='0.0' />
                                </Form.Group>
                            </Col>
                            <Col sm>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control 
                                        as='textarea'
                                        rows={3}
                                        placeholder='Breve descripción.' />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

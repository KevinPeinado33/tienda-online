import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Form , Row, Col, Button } from 'react-bootstrap';

import { useCategorys } from '../../hooks/useCategorys';
import { createPublicationAction } from '../../middlewares/publicationAction';
import { Publication } from '../../interfaces/publicationInterface';

export const MyPublicationPage = () => {

    const dispatch      = useDispatch();
    const { categorys } = useCategorys();

    const [upload, setUpload] = useState< string | undefined >('');
    const [image,setImage]    = useState< string | Blob >('');
    const [state, setState]   = useState< Publication >({
        title: '',
        description: '',
        price: 0.0,
        status: true,
        categoryId: 0
    });

    const previewFile = ( event: any ) => {

        const reader = new FileReader();
        const file   = event.target.files[0];

        setImage( file );

        reader.onload = ( up: any ) => {
            setUpload( up.target.result );
        }

        reader.readAsDataURL( file );
    }

    const onChange = ( { target }: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement> ) => {
        const { value, name } = target as HTMLTextAreaElement;

        setState({
            ...state,
            [name]: value
        });
    }

    const savePublication = ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        dispatch( createPublicationAction(state, image) );
    }

    return (
        <div className="mt-4">
            <h2>Mis Publicaciones</h2>
            <Card 
                className='mt-4'
                style={{ maxWidth: '950px', margin: 'auto' }}>
                <Card.Body>
                    <Form
                        onSubmit={ ( event: React.FormEvent<HTMLFormElement> ) => savePublication( event ) }>
                        <Row>
                            <Col sm>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Titulo</Form.Label>
                                    <Form.Control 
                                        type='text'
                                        name='title'
                                        value={ state.title }
                                        onChange={ ( event: React.ChangeEvent<HTMLInputElement> ) => onChange( event ) }
                                        placeholder='Se intercambia o vende ...' />
                                </Form.Group>
                            </Col>
                            <Col sm>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control 
                                        type='text'
                                        name='price'
                                        value={ state.price }
                                        onChange={ ( event: React.ChangeEvent<HTMLInputElement> ) => onChange( event ) } 
                                        placeholder='0.0' />
                                </Form.Group>
                            </Col>
                            <Col sm>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control 
                                        as='textarea'
                                        rows={3}
                                        name='description'
                                        value={ state.description }
                                        onChange={ ( event: React.ChangeEvent<HTMLInputElement> ) => onChange( event ) }
                                        placeholder='Breve descripción.' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm>
                                <Form.Label>Categoria de la publicación</Form.Label>
                                <Form.Select 
                                    name='categoryId'
                                    value={ state.categoryId }
                                    onChange={ ( event: React.FormEvent<HTMLSelectElement> ) => onChange( event ) }
                                    aria-label="Default select categorys" >
                                    <option value="" disabled >Seleccione una opción</option>
                                    {
                                        categorys.map( ( category ) => (
                                            <option 
                                                key={ category.id.toString() }
                                                value={ category.id }
                                                hidden={ category.id === 0 }>
                                                    { category.title }
                                            </option>
                                        ))
                                    }
                                </Form.Select>
                            </Col>
                            <Col sm>
                                <Form.Label>Foto de la publicación</Form.Label>
                                <Form.Control 
                                    type="file" 
                                    accept="image/*"
                                    onChange={ ( event ) => previewFile( event ) } />
                            </Col>
                        </Row>
                        { 
                            ( !!upload )
                                && <Row>
                                        <Col sm>
                                            <img 
                                                className="mt-4"
                                                style={{ maxWidth: '700px'}}
                                                src={ upload }
                                                alt="foto_subida"/>
                                        </Col>
                                    </Row>
                        }
                        
                        <Button 
                            variant="primary"
                            type="submit"
                            className="mt-4">
                            Registrar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

import { Row, Col } from 'react-bootstrap';

import { Publication } from '../../interfaces/publicationInterface';
import { CardPublication } from '../ui/organisms/CardPublication';

 
interface Props {
    publications: Publication [];
}

export const PublicationsSection = ( { publications }: Props ) => {
    return (
        <Row>
            {
                publications.map(( publication ) => (
                    <Col 
                        md='auto' 
                        key={ publication.id.toString() } >
                        <CardPublication 
                            image={ publication.image }
                            title={ publication.title }
                            description={ publication.description }
                            createAt={ publication.createAt }/>
                    </Col>
                ))
            }
        </Row>
    )
}

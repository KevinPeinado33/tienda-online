import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../stateManagement/store';
import { CardPublication } from '../ui/organisms/CardPublication';
import { downloadPublicationsAction } from '../../middlewares/actionsPublications';

export const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( downloadPublicationsAction() );
        // eslint-disable-next-line
    }, [ ]);

    const { publications } = useSelector( ( state: RootState ) => state.publication );

    return (
        <div className='mt-4'>
            <h2>Todas las publicaciones</h2>
            {
                publications.map(( publication ) => (
                    <CardPublication 
                        key={ publication.id.toString() }
                        image={ publication.image }
                        title={ publication.title }
                        description={ publication.description }
                        createAt={ publication.createAt }/>
                ))
            }
        </div>
    )

}

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../stateManagement/store';
import { CardPublication } from '../ui/organisms/CardPublication';
import { downloadPublicationsAction } from '../../middlewares/publicationAction';
import { useCategorys } from '../../hooks/useCategorys';
import { CardCategory } from '../ui/organisms/CardCategory';

export const HomePage = () => {

    const dispatch = useDispatch();

    const { categorys, isLoading } = useCategorys();

    useEffect(() => {
        dispatch( downloadPublicationsAction() );
        // eslint-disable-next-line
    }, [ ]);

    const { publications, loading } = useSelector( ( state: RootState ) => state.publication );

    if ( isLoading || loading ) {
        return (
            <h1>Cargando ...</h1>
        )
    }

    return (
        <div className='mt-4'>
            <h2>Todas las publicaciones</h2>
            <h5>Categorias</h5>
            {
                categorys.map(( category ) => (
                    <CardCategory
                        key={ category.id.toString() }
                        title={ category.title }
                        idCategory={ category.id } />
                ))
            }
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

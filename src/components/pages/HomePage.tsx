import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardGroup } from 'react-bootstrap';

import { RootState } from '../../stateManagement/store';
import { CardPublication } from '../ui/organisms/CardPublication';
import { downloadPublicationsAction } from '../../middlewares/publicationAction';
import { useCategorys } from '../../hooks/useCategorys';
import { BadCategory } from '../ui/organisms/BadgeCategory';

export const HomePage = () => {

    const dispatch = useDispatch();

    const { categorys, isLoading } = useCategorys();

    useEffect(() => {
        dispatch( downloadPublicationsAction() );
        // eslint-disable-next-line
    }, [ ]);
    
    const { publications, loading } = useSelector( ( state: RootState ) => state.publication );
    
    const [ categorySelected, setCategorySelected ] = useState< number >( 0 );

    if ( isLoading || loading ) {
        return (
            <h5 className="mt-4 mb-4 text-center">Cargando ...</h5>
        )
    }

    return (
        <div className='mt-4'>
            <h2>Todas las publicaciones</h2>
            <div className="mt-4 mb-4">
                <span className="mb-1">Categorias</span>
                <br />
                {
                    categorys.map(( category ) => (
                        <BadCategory
                            key={ category.id.toString() }
                            title={ category.title }
                            isSelected={ categorySelected }
                            setCategory={ setCategorySelected }
                            idCategory={ category.id } />
                    ))
                }
            </div>
            <CardGroup>
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
            </CardGroup>
        </div>
    )

}

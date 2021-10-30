import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useCategorys } from '../../hooks/useCategorys';
import { BadCategory } from '../ui/organisms/BadgeCategory';
import { Loading } from '../ui/atoms/Loading';
import { PublicationsSection } from '../template/PublicationsSection';

import { RootState } from '../../stateManagement/store';
import { 
    downloadPublicationsAction,
    downloadPublicationByCategoryAction 
} from '../../middlewares/publicationAction';

export const HomePage = () => {
    
    const dispatch = useDispatch();

    const { categorys, isLoading } = useCategorys();    
    
    const { publications, loading } = useSelector( ( state: RootState ) => state.publication );
    
    const [ categorySelected, setCategorySelected ] = useState( 0 );

    useEffect(() => {

        if ( categorySelected !== 0 ) {
            dispatch( downloadPublicationByCategoryAction( categorySelected ) );
        } else {
            dispatch( downloadPublicationsAction() );
        }

        // eslint-disable-next-line
    }, [ categorySelected ]);

    return (
        <div className='mt-4'>
            <h2>Todas las publicaciones</h2>
            <div className="mt-4 mb-4">
                <span className="mb-1">Categorias</span>
                <br />
                { ( isLoading ) && <Loading /> }
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
            { ( loading ) &&  <Loading /> }
            {
                ( publications.length === 0 && !loading )
                    ? <h5>No existe ninguna publicación !!</h5>
                    : <PublicationsSection
                        publications={ publications } />
            }
        </div>
    )

}

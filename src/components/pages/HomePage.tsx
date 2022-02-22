import { BadCategory } from '../ui/organisms/BadgeCategory';
import { Loading } from '../ui/atoms/Loading';
import { PublicationsSection } from '../template/PublicationsSection';

import { useHomePage } from '../../hooks/useHomePage';

export const HomePage = () => {
    
    const { 
        isLoading, 
        categorys, 
        setCategorySelected, 
        categorySelected, 
        publications, 
        loading } = useHomePage();

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

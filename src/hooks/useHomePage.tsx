import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PublicationService } from "../services/publicationService";
import { RootState } from "../stateManagement/store";
import { useCategorys } from "./useCategorys";

export const useHomePage = () => {

    const dispatch = useDispatch();

    const { 
        downloadPublicationByCategoryAction, 
        downloadPublicationsAction 
    } = new PublicationService();

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

    return {
        categorys,
        isLoading,
        publications,
        loading,
        setCategorySelected,
        categorySelected
    }
    
}
import { PublicationAction } from '../types/publicationTypes';

interface PublicationState {
    publications: string[];
    loading: boolean;
    error: string | null | any;
}
const initialState: PublicationState = {
    publications: [],
    loading: false,
    error: null
}

const PublicationReducer = ( state: PublicationState = initialState, action: PublicationAction ): PublicationState => {

    switch ( action.type ) {

        case 'EDIT_PUBLICATION':
        case 'DELETE_PUBLICATION':
        case 'CREATE_PUBLICATION':
        case 'DOWNLOAD_PUBLICATIONS':
            return {
                ...state,
                loading: true
            }
        
        case 'DOWNLOAD_PUBLICATIONS_SUCCESS':
            return {
                ...state,
                loading: false,
                publications: action.payload
            }
        
        case 'CREATE_PUBLICATION_SUCCESS':
            return {
                ...state,
                loading: false,
                publications: [ ...state.publications, action.payload ]
            }

        case 'EDIT_PUBLICATION_SUCCESS':
            return {
                ...state,
                loading: false,
                publications: state.publications.map( item => item === action.payload ? item = action.payload : item )
            }

        case 'DELETE_PUBLICATION_SUCCESS':
            return {
                ...state,
                loading: false,
                publications: state.publications.filter( item => item !== action.payload )
            }
        
        case 'EDIT_PUBLICATION_ERROR':
        case 'DELETE_PUBLICATION_ERROR':
        case 'CREATE_PUBLICATION_ERROR':
        case 'DOWNLOAD_PUBLICATIONS_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;

    }
}

export default PublicationReducer;
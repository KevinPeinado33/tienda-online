import { Dispatch } from 'redux';
import { Publication } from '../interfaces/publicationInterface';

import { 
    downloadPublications,
    downloadPublicationsError,
    downloadPublicationsSuccess,
    createPublication,
    createPublicationError,
    createPublicationSuccess,
    updatePublication,
    updatePublicationError,
    updatePublicationSuccess,
    deletePublication,
    deletePublicationError,
    deletePublicationSuccess
} from '../stateManagement/actions/publicationAction';

/**
 * Function for get data of API connected with
 * our actions
 * @returns 
 */
export const downloadPublicationsAction = () => {

    return async ( dispatch: Dispatch ) => {

        dispatch( downloadPublications() );

        try {

            dispatch( downloadPublicationsSuccess( [] ) );

        } catch ( error ) {

            dispatch( downloadPublicationsError( error ) );

        }

    }

}

/**
 * Function for create one object with consume API
 * @param publication -> object capturated of any component
 * @returns 
 */
export const createPublicationAction = ( publication: Publication ) => {
    
    return async ( dispatch: Dispatch ) => {

        dispatch( createPublication() );

        try {

            dispatch( createPublicationSuccess( publication ) );

        } catch ( error ) {

            dispatch( createPublicationError( error ) );

        }

    }

}

/**
 * Function for update one object with consume API
 * @param id -> of publication
 * @param publication -> new changes for publication
 * @returns 
 */
 export const updatePublicationAction = ( id: number, publication: Publication ) => {
    
    return async ( dispatch: Dispatch ) => {

        dispatch( updatePublication() );

        try {

            dispatch( updatePublicationSuccess( publication ) );

        } catch ( error ) {

            dispatch( updatePublicationError( error ) );

        }

    }

}

/**
 * Function for delete one object with consume API
 * @param id -> of publication
 * @returns 
 */
 export const deletePublicationAction = ( id: number ) => {
    
    return async ( dispatch: Dispatch ) => {

        dispatch( deletePublication() );

        try {

            dispatch( deletePublicationSuccess( id ) );

        } catch ( error ) {

            dispatch( deletePublicationError( error ) );

        }

    }

}
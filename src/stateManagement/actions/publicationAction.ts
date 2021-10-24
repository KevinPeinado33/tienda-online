import { PublicationAction } from '../types/publicationTypes';
import { Publication } from '../../interfaces/publicationInterface';

/**
 * Actionsfor capture actions when get data of the API
 */
export const downloadPublications = (): PublicationAction => ({
    type: 'DOWNLOAD_PUBLICATIONS'
});

export const downloadPublicationsSuccess = ( publications: Publication[] ): PublicationAction => ({
    type: 'DOWNLOAD_PUBLICATIONS_SUCCESS',
    payload: publications
});

export const downloadPublicationsError = ( error: string | null | any  ): PublicationAction => ({
    type: 'DOWNLOAD_PUBLICATIONS_ERROR',
    payload: error
});

/**
 * Actions for create publication
 */
export const createPublication = (): PublicationAction => ({
    type: 'CREATE_PUBLICATION'
});

export const createPublicationSuccess = ( publication: Publication ): PublicationAction => ({
    type: 'CREATE_PUBLICATION_SUCCESS',
    payload: publication 
});

export const createPublicationError = ( error: string | null | any  ): PublicationAction => ({
    type: 'CREATE_PUBLICATION_ERROR',
    payload: error
});

/**
 * Actions for update any publication
 */
export const updatePublication = (): PublicationAction => ({
    type: 'EDIT_PUBLICATION'
});

export const updatePublicationSuccess = ( publication: Publication ): PublicationAction => ({
    type: 'EDIT_PUBLICATION_SUCCESS',
    payload: publication 
});

export const updatePublicationError = ( error: string | null | any  ): PublicationAction => ({
    type: 'EDIT_PUBLICATION_ERROR',
    payload: error
});

/**
 * Actions for delete any publication
 */
 export const deletePublication = (): PublicationAction => ({
    type: 'DELETE_PUBLICATION'
});

export const deletePublicationSuccess = ( id: number ): PublicationAction => ({
    type: 'DELETE_PUBLICATION_SUCCESS',
    payload: id 
});

export const deletePublicationError = ( error: string | null | any  ): PublicationAction => ({
    type: 'DELETE_PUBLICATION_ERROR',
    payload: error
});
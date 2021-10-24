import { Dispatch } from 'redux';

import { PublicationAction } from '../types/publicationTypes';

export const downloadPublicationsAction = () => {

    return async ( dispatch: Dispatch ) => {

        dispatch( downloadPublications() );

        try {

            dispatch( downloadPublicationsSuccess(['prueba 1', 'prueba 2']) );

        } catch (error) {

            dispatch( downloadPublicationsError(error) );

        }

    }

}

const downloadPublications = (): PublicationAction => ({
    type: 'DOWNLOAD_PUBLICATIONS'
});

const downloadPublicationsSuccess = ( publications: string[] ): PublicationAction => ({
    type: 'DOWNLOAD_PUBLICATIONS_SUCCESS',
    payload: publications
});

const downloadPublicationsError = ( error: string | null | any  ): PublicationAction => ({
    type: 'DOWNLOAD_PUBLICATIONS_ERROR',
    payload: error
});
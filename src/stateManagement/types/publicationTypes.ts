import { Publication } from '../../interfaces/publicationInterface';

export type PublicationAction =
    | { type: 'DOWNLOAD_PUBLICATIONS' }
    | { type: 'DOWNLOAD_PUBLICATIONS_SUCCESS', payload: Publication[] }
    | { type: 'DOWNLOAD_PUBLICATIONS_ERROR', payload: string }
    | { type: 'CREATE_PUBLICATION' }
    | { type: 'CREATE_PUBLICATION_SUCCESS', payload: Publication }
    | { type: 'CREATE_PUBLICATION_ERROR', payload: string }
    | { type: 'EDIT_PUBLICATION' }
    | { type: 'EDIT_PUBLICATION_SUCCESS', payload: Publication }
    | { type: 'EDIT_PUBLICATION_ERROR', payload: string }
    | { type: 'DELETE_PUBLICATION' }
    | { type: 'DELETE_PUBLICATION_SUCCESS', payload: number }
    | { type: 'DELETE_PUBLICATION_ERROR', payload: string | null | any }
    ;
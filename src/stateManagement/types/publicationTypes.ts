export type PublicationAction =
    | { type: 'DOWNLOAD_PUBLICATIONS' }
    | { type: 'DOWNLOAD_PUBLICATIONS_SUCCESS', payload: string[] }
    | { type: 'DOWNLOAD_PUBLICATIONS_ERROR', payload: string }
    | { type: 'CREATE_PUBLICATION' }
    | { type: 'CREATE_PUBLICATION_SUCCESS', payload: string }
    | { type: 'CREATE_PUBLICATION_ERROR', payload: string }
    | { type: 'EDIT_PUBLICATION' }
    | { type: 'EDIT_PUBLICATION_SUCCESS', payload: string }
    | { type: 'EDIT_PUBLICATION_ERROR', payload: string }
    | { type: 'DELETE_PUBLICATION' }
    | { type: 'DELETE_PUBLICATION_SUCCESS', payload: string }
    | { type: 'DELETE_PUBLICATION_ERROR', payload: string | null | any }
    ;
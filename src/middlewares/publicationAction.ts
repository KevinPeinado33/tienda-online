import { Dispatch } from 'redux';

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
import { api, apiImg } from '../config/axiosGlobal';
import { Publication } from '../interfaces/publicationInterface';
import axios from 'axios';
import { ImageResponse } from '../interfaces/imageInterface';

/**
 * Function for get data of API connected with
 * our actions
 * @returns 
 */
export const downloadPublicationsAction = () => {

    return async ( dispatch: Dispatch ) => {

        dispatch( downloadPublications() );

        try {

            const response = await api.get< Publication [] >('/publications');
            
            if ( response.status === 200 ) {
                dispatch( downloadPublicationsSuccess( response.data ) );
            }

        } catch ( error ) {

            dispatch( downloadPublicationsError( error ) );

        }

    }

}

/**
 * Function for get all publications by category
 * @param idCategory -> id of category to filter publications
 * @returns 
 */
export const downloadPublicationByCategoryAction = ( idCategory: number ) => {
    return async ( dispatch: Dispatch ) => {

        dispatch( downloadPublications() );

        try {

            const response = await api.get< Publication [] >(`/publications/category/${idCategory}`);
            
            if ( response.status === 200 ) {
                dispatch( downloadPublicationsSuccess( response.data ) );
            }

        } catch ( error ) {

            dispatch( downloadPublicationsError( error ) );

        }
    }
}

/**
 * Function for create one object with consume API
 * @param publication -> object capturated of any component
 * @param image -> image in type of blob
 * @returns 
 */
export const createPublicationAction = ( publication: Publication, image: string | Blob ) => {
    
    return async ( dispatch: Dispatch ) => {

        dispatch( createPublication() );

        try {

            const formData = new FormData();

            formData.append('image', image);
            
            const responseImage = await apiImg.post< ImageResponse >('/upload', formData);

            if ( 200 === responseImage.status ) {

                publication.image      = responseImage.data.data.image.url;
                publication.categoryId = +publication.categoryId!;
                publication.price      = Number( publication.price );

                const responsePublication = await api.post< Publication, any >('/publications', publication);

                if ( 201 === responsePublication.status ) {
                    dispatch( createPublicationSuccess( responsePublication.data ) );
                }

            }

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

export const uploadImage = async ( image: string | Blob ) => {
    
    try {
        console.log('llego hasta el metodo del middleware!');

        const form = new FormData();
        form.append('image', image);
    
        const response = await axios.post('https://api.imgbb.com/1/upload?key=709a76029db976ae987795f0c8abea8d', 
        form,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        } 
        );

        console.log(response);

    } catch (error) {
        console.log(error);
    }
    
}
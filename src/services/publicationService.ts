import { Dispatch } from 'redux';
import axios from 'axios';

import { Publication } from "../interfaces/publicationInterface";
import { ImageResponse } from '../interfaces/imageInterface';
import { api, apiImg } from '../config/axiosGlobal';
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

export class PublicationService {

    private STATUS_OK        = 200;
    private STATUS_CREATE_OK = 201;


    constructor() { }
    

    downloadPublicationsAction() {

        return async ( dispatch: Dispatch) => {
            
            try {

                dispatch( downloadPublications() );

                const response = await api.get< Publication [] >('/publications');
            
                if ( this.STATUS_OK === response.status ) {
                    dispatch( downloadPublicationsSuccess( response.data ) );
                }

            } catch ( error ) {

                dispatch( downloadPublicationsError( error ) );

            }

        }

    }
    
    downloadPublicationByCategoryAction(idCategory: number) {
        return async ( dispatch: Dispatch ) => {

            dispatch( downloadPublications() );
    
            try {
    
                const response = await api.get< Publication [] >(`/publications/category/${idCategory}`);
                
                if ( this.STATUS_OK === response.status ) {
                    dispatch( downloadPublicationsSuccess( response.data ) );
                }
    
            } catch ( error ) {
    
                dispatch( downloadPublicationsError( error ) );
    
            }
        }
    }
    
    createPublicationAction(publication: Publication, image: string | Blob) {
        return async ( dispatch: Dispatch ) => {

            dispatch( createPublication() );
    
            try {
    
                const formData = new FormData();
    
                formData.append('image', image);
                
                const responseImage = await apiImg.post< ImageResponse >('/upload', formData);
    
                if ( this.STATUS_OK === responseImage.status ) {
    
                    publication.image      = responseImage.data.data.image.url;
                    publication.categoryId = +publication.categoryId!;
                    publication.price      = Number( publication.price );
    
                    const responsePublication = await api.post< Publication, any >('/publications', publication);
    
                    if ( this.STATUS_CREATE_OK === responsePublication.status ) {
                        dispatch( createPublicationSuccess( responsePublication.data ) );
                    }
    
                }
    
            } catch ( error ) {
    
                dispatch( createPublicationError( error ) );
    
            }
    
        }
    }
    
    updatePublicationAction(id: number, publication: Publication) {

        return async ( dispatch: Dispatch ) => {

            dispatch( updatePublication() );
    
            try {
    
                dispatch( updatePublicationSuccess( publication ) );
    
            } catch ( error ) {
    
                dispatch( updatePublicationError( error ) );
    
            }
    
        }

    }
    
    deletePublicationAction(id: number) {
        return async ( dispatch: Dispatch ) => {

            dispatch( deletePublication() );
    
            try {
    
                dispatch( deletePublicationSuccess( id ) );
    
            } catch ( error ) {
    
                dispatch( deletePublicationError( error ) );
    
            }
    
        }
    }
    
    async uploadImage(image: string | Blob) {

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
    
}
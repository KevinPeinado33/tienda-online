import { useState, useEffect } from 'react';

import { api } from '../config/axiosGlobal';
import { Category } from '../interfaces/categoryInterface';

interface CategoryState {
    categorys: Category[];
    isLoading:  boolean;
}

export const useCategorys = (): CategoryState => {

    const [state, setState] = useState<CategoryState>({
        categorys: [],
        isLoading: true
    });

    const getCategorys = async () => {
        const response = await api.get<Category[]>('/categorys');

        const allCategory = { 
            id: 0, 
            title: 'Todos', 
            createAt: `${new Date()}`, 
            updateAt:`${new Date()}` 
        };

        setState({
            categorys: [ allCategory, ...response.data ],
            isLoading: false
        });
    }

    useEffect(() => { getCategorys(); }, []);

    return { ...state }

}
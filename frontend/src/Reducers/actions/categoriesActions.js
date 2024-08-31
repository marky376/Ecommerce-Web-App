import axios from 'axios';

export const fetchCategories = () => async (dispatch) => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/categories/');
        dispatch({
            type: 'SET_CATEGORIES',
            payload: response.data,
        });
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

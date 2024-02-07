import AxiosConfig from './config/AxiosConfig';

export const fetchCategoriesApi = () => {
    return AxiosConfig.get('api_category.php')
        .then(r => {

            return r.data.trivia_categories;
        })
        .catch(e => {
            console.log('received error', e);
        })
}
import AxiosConfig from './config/AxiosConfig';

export const fetchQuestionsApi = (categoryId: number, difficulty: string) => {
    return AxiosConfig.get(`api.php?amount=15&category=${categoryId}&difficulty=${difficulty}`)
        .then(r => {
            return r.data.results;
        })
        .catch(e => {
            console.log('received error', e);
        })
}
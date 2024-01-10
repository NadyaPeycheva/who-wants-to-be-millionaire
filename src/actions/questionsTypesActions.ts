import * as actionTypes from './actionTypes';

export const getCategoryTypes = (types: { name: string, id: number }) => {
    return {
        type: actionTypes.GET_CATEGORY_TYPES,
        types
    }
}
export const getDifficultyTypes = (difficultyType: string) => {
    return {
        type: actionTypes.GET_DIFFICULTY_TYPE,
        difficultyType
    }
}
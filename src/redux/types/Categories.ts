export type CategoryType={
    id:number,name:string
}
export type CategoriesType={
    isFetching: boolean,
    categories: CategoryType[],
}
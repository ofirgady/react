import { createStore } from "redux";
import CategoriesModel from "../Models/CategoryModel";



// 1. AppState - Data in app level
export class CategoriesState {
    public categories: CategoriesModel[] = [];

}

// 2. ActionType - AppState Actions List - what we can do on our state:
export enum CategoriesActionType {
    FetchCategories = "FetchCategories",
    // AddCategory = "AddCategory",
    // UpdateCategory = "UpdateCategory",
    // DeleteCategory = "DeleteCategory"
}

// 3. Action - A single action on the state:
export interface CategoriesAction {
    type: CategoriesActionType;
    payload: any; // any --> list of Categories, single category...
}

// 4. Action Creators - functions for creating Action Objects -each for different ActionType - not mandatory
export function fetchCategoriesAction(categories: CategoriesModel[]): CategoriesAction {
    return { type: CategoriesActionType.FetchCategories , payload: categories};
}

// export function addCategoriesAction(category: CategoryModel): CategoriesAction {
//     return { type: CategoriesActionType.AddCategory , payload: category};
// }

// export function updateCategoriesAction(category: CategoryModel): CategoriesAction {
//     return { type: CategoriesActionType.UpdateCategory , payload: category};
// }

// export function deleteCategoriesAction(id: number): CategoriesAction {
//     return { type: CategoriesActionType.DeleteCategory , payload: id};
// }

// 5. Reducer - perform the actual operation:
export function categoriesReducer(currentState = new CategoriesState(), action: CategoriesAction) : CategoriesState {

    const newState = {...currentState};

    switch(action.type) {
        case CategoriesActionType.FetchCategories: //here, the payload is the list of all Categories
            newState.categories = action.payload;
            break;
        
        // case CategoriesActionType.AddCategory: // here. the payload is a new Category
        //     newState.categories.push(action.payload);
        //     break;

        // case CategoriesActionType.UpdateCategory: // here, the payload is an existing Category
        //     const indexToUpdate = newState.categories.findIndex(e => e.id === action.payload.id);
        //     if(indexToUpdate >= 0) newState.categories[indexToUpdate] = action.payload;
        //     break;

        // case CategoriesActionType.DeleteCategory: // here, the payload is Category id
        //     const indexToDelete = newState.categories.findIndex(e => e.id === action.payload);
        //     if(indexToDelete >= 0) newState.categories.splice(indexToDelete, 1); // 1 = delete only one
        //     break;
    }

    return newState;

    
}

// 6. Store - the managing object:
export const categoriesStore = createStore(categoriesReducer);
import { applyMiddleware, compose, createStore } from "redux";
import ProductModel from "../Models/ProductModel";
import { countActions, newProductClear } from "./Middleware";
import {logger} from "redux-logger" // logger is the middleware function
import { composeWithDevTools } from "redux-devtools-extension";

// 1. AppState - Data in app level
export class ProductsState {
    public products: ProductModel[] = [];

}

// 2. ActionType - AppState Actions List - what we can do on our state:

export enum ProductsActionType {
    FetchProducts = "FetchProducts",
    AddProduct = "AddProduct",
    UpdateProduct = "UpdateProduct",
    DeleteProduct = "DeleteProduct",
}

// 3. Action - A single action on the state:
export interface ProductsAction {
    type: ProductsActionType;
    payload: any; // any --> list of products, single product...
}

// 4. Action Creators - functions for creating Action Objects -each for different ActionType - not mandatory
export function fetchProductsAction(products: ProductModel[]): ProductsAction {
    return { type: ProductsActionType.FetchProducts , payload: products};
}

export function addProductsAction(product: ProductModel): ProductsAction {
    return { type: ProductsActionType.AddProduct , payload: product};
}

export function updateProductsAction(product: ProductModel): ProductsAction {
    return { type: ProductsActionType.UpdateProduct , payload: product};
}

export function deleteProductsAction(id: number): ProductsAction {
    return { type: ProductsActionType.DeleteProduct , payload: id};
}

// 5. Reducer - perform the actual operation:
export function productsReducer(currentState = new ProductsState(), action: ProductsAction) : ProductsState {

    const newState = {...currentState};

    switch(action.type) {
        case ProductsActionType.FetchProducts: //here, the payload is the list of all products
            newState.products = action.payload;
            break;
        
        case ProductsActionType.AddProduct: // here. the payload is a new product
            newState.products.push(action.payload);
            break;

        case ProductsActionType.UpdateProduct: // here, the payload is an existing product
            const indexToUpdate = newState.products.findIndex(p => p.id === action.payload.id);
            if(indexToUpdate >= 0) newState.products[indexToUpdate] = action.payload;
            break;

        case ProductsActionType.DeleteProduct: // here, the payload is product id
            const indexToDelete = newState.products.findIndex(p => p.id === action.payload);
            if(indexToDelete >= 0) newState.products.splice(indexToDelete, 1); // 1 = delete only one
            break;
    }

    return newState;

    
}

// 6. Store - the managing object:

// With Middleware, Without DevTools
// export const productsStore = createStore(
//     productsReducer,
//     applyMiddleware(countActions, logger)
//     );

// With DevTools, Without Middleware
// export const productsStore = createStore(
//     productsReducer,
//     composeWithDevTools()
//     );

// With DevTools, With Middleware
export const productsStore = createStore(
    productsReducer,
    compose( applyMiddleware(countActions, logger, newProductClear ), composeWithDevTools())
    );
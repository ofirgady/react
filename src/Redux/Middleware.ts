import { ProductsAction, ProductsActionType } from "./ProductsState";

let counter = 0;
 
export function countActions(productsStore: any) {
    return function ( next: Function) {
        return function (action: ProductsAction) {
            console.log(`Current action ${action.type}, Total actions: ${++counter}`);

            // Here, Store contains the current state (before dispatch)

            next(action); // Here, the Reducer will be invoked 

            // Here, Store contains the next state (after dispatch)
        }
    }
 }


export function newProductClear(productsStore: any) {
    return function ( next: Function) {
        return function (action: ProductsAction) {
            if ( action.type === ProductsActionType.AddProduct){
                console.clear();
                console.log(action)
            }
            next(action);
        };
    }
 }
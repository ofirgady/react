// 1. state
import jwtDecode from "jwt-decode";
import { createStore } from "redux";
import UserModel from "../Models/UserModel";

export class AuthState {
    public token: string = null;
    public user: UserModel = null;

    public constructor() {
        this.token = localStorage.getItem("token");
        if(this.token) {
            this.user = jwtDecode<{ user : UserModel}>(this.token).user;

        }
    }
}

// 2. ActionType
export enum AuthActionType {
    Register = "Register",
    Login = "Login",
    Logout = "Logout"
}

// 3. Action
export interface AuthAction {
    type: AuthActionType;
    payload?: string; //optional
}

// 4. Action Creators
export function registerAction(token: string) : AuthAction {
    return {type: AuthActionType.Register , payload: token};
}
export function loginAction(token: string) : AuthAction {
    return {type: AuthActionType.Login , payload: token};
}
export function logoutAction() : AuthAction {
    return {type: AuthActionType.Logout};
}

// 5. Reducer
export function authReducer(cuurentState = new AuthState(), action: AuthAction): AuthState {
    const newState = {...cuurentState};

    switch(action.type) {
        case AuthActionType.Register: // here, the payload is the token
        case AuthActionType.Login: // here, the payload is the token
            newState.token = action.payload;
            newState.user = jwtDecode<{ user : UserModel}>(action.payload).user;
            localStorage.setItem("token", action.payload);
            break;

        case AuthActionType.Logout: // here, we don't have a payload
            newState.token = newState.user = null;
            localStorage.removeItem("token");
            break;
    }

    return newState;
}

// 6. store
export const authStore = createStore(authReducer);


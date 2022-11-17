import axios from "axios";
import CredentialsModel from "../Models/CredentialsModel";
import UserModel from "../Models/UserModel";
import { authStore, loginAction, logoutAction, registerAction } from "../Redux/AuthState";
import appConfig from "../Utils/AppConfig";

class AuthService {

    public async register(user: UserModel) {
        const response = await axios.post<string>(appConfig.registerUrl, user);
        const token = response.data;
        authStore.dispatch(registerAction(token));
    }

    public async login(credentials: CredentialsModel) {
        const response = await axios.post<string>(appConfig.loginUrl, credentials);
        const token = response.data;
        authStore.dispatch(loginAction(token));
    }

    public logout() : void {
        authStore.dispatch(logoutAction());
    }

    public get isLoggedIn(): boolean {
        return authStore.getState().token !== null;
    }

}

const authService =  new AuthService();

export default authService;
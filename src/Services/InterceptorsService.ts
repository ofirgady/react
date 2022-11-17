import axios from "axios";
import { authStore } from "../Redux/AuthState";
import authService from "./AuthService";

class InterceptorsService {

    public createInterceptors(): void {
        axios.interceptors.request.use(request => {
            if(request.url.indexOf("products") >= 0) {
                console.log("start Request...", request);  
            }
            return request;
        });

        axios.interceptors.response.use(response => {
            if(response.config.url.indexOf("products") >= 0) {
                console.log("Got Response...", response);  
            }
            return response;
        });

        axios.interceptors.request.use(request => {
            if(authService.isLoggedIn) {
                request.headers.authorization = "Bearer " + authStore.getState().token // Don't forget the space after the Bearer
            }
            return request;
        })
    }
}

const interceptorsService = new InterceptorsService();

export default interceptorsService;
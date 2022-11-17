import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";
import "./Login.css";

function Login(): JSX.Element {
    const { register, handleSubmit, formState} = useForm<CredentialsModel>()
    const navigate = useNavigate();

    async function send(cred: CredentialsModel) {
        try {
            await authService.login(cred);
            notifyService.success("Welcome back " + authStore.getState().user.firstName + "!" );
            navigate("/home");
        } catch (err : any) {
            notifyService.error(err);
        }
    }

    return (
        <div className="Login Box">
			
            <h2>Login</h2>

            <form onSubmit={handleSubmit(send)}>

                <label>Username: </label>
                <input type="text" {...register("username", CredentialsModel.usernameValidation)} />
                <span>{formState.errors.username?.message}</span>


                <label>Password: </label>
                <input type="password" {...register("password", CredentialsModel.passwordValidation)} />
                <span>{formState.errors.password?.message}</span>


                <button>Login</button>

            </form>
        </div>
    );
}

export default Login;

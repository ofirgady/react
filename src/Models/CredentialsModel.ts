import { RegisterOptions } from "react-hook-form";

class CredentialsModel {
	public username: string; //DON'T USE userName BUT username
    public password: string;

    public static usernameValidation: RegisterOptions = {
        required: {value: true, message: "Missing Username"},
        minLength: {value: 3 , message: "Username is too short"},
        maxLength: {value: 50 , message: "Username is too long"} 
    };

    public static passwordValidation: RegisterOptions = {
        required: {value: true, message: "Missing Password"},
        minLength: {value: 3 , message: "Password is too short"},
        maxLength: {value: 50 , message: "Password is too long"} 
    };
}

export default CredentialsModel;

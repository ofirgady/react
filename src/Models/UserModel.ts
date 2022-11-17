import { RegisterOptions } from "react-hook-form";

class UserModel {
	public id: number;
    public firstName: string;
    public lastName: string;
    public username: string; //DON'T USE userName BUT username
    public password: string;

    public static firstnameValidation: RegisterOptions = {
        required: {value: true, message: "Missing First Name"},
        minLength: {value: 3 , message: "First Name is too short"},
        maxLength: {value: 50 , message: "First Name is too long"} 
    };

    public static lastnameValidation: RegisterOptions = {
        required: {value: true, message: "Missing Last Name"},
        minLength: {value: 3 , message: "Last Name is too short"},
        maxLength: {value: 50 , message: "Last Name is too long"} 
    };

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

export default UserModel;

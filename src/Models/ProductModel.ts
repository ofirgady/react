import {RegisterOptions} from "react-hook-form"

class ProductModel {

    public id: number;
    public name: string; 
    public price: number;
    public stock: number;
    public imageName: string;
    public image: File;

    public static nameValidation: RegisterOptions = {
        required: {value: true, message: "Missing name"},
        minLength: {value: 3 , message: "Name is too short"},
        maxLength: {value: 50 , message: "Name is too long"} 
    };

    public static priceValidation: RegisterOptions = {
        required: {value: true, message: "Missing Price"},
        min: {value: 0 , message: "the price has to be greater than 0"},
        max: {value: 1000 , message: "there can't be a product that costs more than $1000"},

    };

    public static stockValidation: RegisterOptions = {
        required: {value: true, message: "Missing stock quantity"},
        min: {value: 0 , message: "there can't be minus products in stock"},
        max: {value: 1000 , message: "there can't be more than 1000 products in stock"},

    };

    public static imageValidation: RegisterOptions = {
        required: {value: true, message: "Missing Image"},
    }
}

export default ProductModel;

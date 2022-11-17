import ProductModel from "../../../Models/ProductModel";
import "./AddProduct.css";
import { useForm } from "react-hook-form"
import productService from "../../../Services/ProductsService";
import notifyService from "../../../Services/NotifyService";
import { useNavigate } from "react-router-dom";

function AddProduct(): JSX.Element {

    const {register, handleSubmit, formState} = useForm<ProductModel>()

    const navigate = useNavigate();
    
    async function send(product :ProductModel) {
        try {
            product.image = (product.image as unknown as FileList).item(0);
            await productService.addProduct(product);
            notifyService.success("Product has been added")
            navigate("/products")

        } catch (err: any) {
            notifyService.error(err);
        }
    }

    return (
        <div className="AddProduct Box">
			<h2>Add Product</h2>

            <form onSubmit={handleSubmit(send)}>
                <label>Name: </label>
                <input type="text" {...register("name", ProductModel.nameValidation)} />
                <span>{formState.errors.name?.message}</span>
                
                <label>Price: </label>
                <input type="number" step="0.01" {...register("price", ProductModel.priceValidation)} />
                <span>{formState.errors.price?.message}</span>
                

                <label>Stock: </label>
                <input type="number" {...register("stock", ProductModel.stockValidation)} />
                <span>{formState.errors.stock?.message}</span>

                <label>Image: </label>
                <input type="file" accept="image/*" {...register("image", ProductModel.imageValidation)} />
                <span>{formState.errors.image?.message}</span>

                <button >Add</button>

                
            </form>
        </div>
    );
}

export default AddProduct;

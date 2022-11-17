import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notifyService from "../../../Services/NotifyService";
import { useForm } from "react-hook-form"
import productService from "../../../Services/ProductsService";
import "./EditProduct.css";
import appConfig from "../../../Utils/AppConfig";

function EditProduct(): JSX.Element {

    const {register, handleSubmit, formState, setValue} = useForm<ProductModel>()

    const navigate = useNavigate();

    const params = useParams();

    const [imageSource, setImageSource] = useState<string>(null);

    

    useEffect(() => {
        const id = +params.id;
        productService.getOneProduct(id)
            .then(product => {
                setValue("id", product.id);
                setValue("name", product.name);
                setValue("price", product.price);
                setValue("stock", product.stock);
                setImageSource(appConfig.productImagesUrl + product.imageName);

            })
            .catch(err => notifyService.error(err))
    }, []);
    
    async function send(product :ProductModel) {
        try {
            product.image = (product.image as unknown as FileList).item(0);
            await productService.updateProduct(product);
            notifyService.success("Product has been updated")
            navigate("/products/details/" +product.id)

        } catch (err: any) {
            notifyService.error(err);
        }
    }

    function loadImage(args: ChangeEvent<HTMLInputElement>): void {
        const image = args.target.files[0]; //file
        if(!image) return;
        const fileReader = new FileReader();
        fileReader.onload = event => { //register done reading event
            setImageSource(event.target.result.toString()); // display image when done reading
        };
        fileReader.readAsDataURL(image); // read image
    }

    return (
        <div className="EditProduct Box">
			<h2>Edit Product</h2>

            <form onSubmit={handleSubmit(send)}>
                
                <input type="hidden" {...register("id")} />

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
                <input type="file" accept="image/*" {...register("image")} onChange={loadImage} />
                <span>{formState.errors.image?.message}</span>
                <img src={imageSource} />

                <button >Update</button>
 
                
            </form>
        </div>
    );
}

export default EditProduct;


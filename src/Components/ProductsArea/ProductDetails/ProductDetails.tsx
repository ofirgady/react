import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import notifyService from "../../../Services/NotifyService";
import productService from "../../../Services/ProductsService";
import appConfig from "../../../Utils/AppConfig";
import Spinner from "../../SharedArea/Spinner/Spinner";
import "./ProductDetails.css";

function ProductDetails(): JSX.Element {

    const params = useParams()
    const navigate = useNavigate();
    const [product, setProduct] = useState<ProductModel>();
    const [user, setUser] = useState<UserModel>();


    useEffect(()=>{

        const id = +params.id;

       productService.getOneProduct(id)
        .then(product => setProduct(product))
        .catch(err => notifyService.error(err));

        setUser(authStore.getState().user);
        const unsubscribe = authStore.subscribe(() => setUser(authStore.getState().user));
        return () => unsubscribe();

    }, []);

    async function deleteProduct() {
        try {
            const ok = window.confirm("Are you sure?");
            if (!ok) return;
            await productService.deleteProduct(product.id);
            notifyService.success("product has been deleted");
            navigate("/products");
        }
             catch (err : any) {
            notifyService.error(err);
        }
    }

    return (
        <div className="ProductDetails">

            {!product && <Spinner />}
            {product && 
            <>
                <h3>Name: {product.name}</h3>
                <h3>Price: ${product.price}</h3>
                <h3>Stock: {product.stock}</h3>
                <img src={appConfig.productImagesUrl + product.imageName} />

                {user && <>
                <br />
                <br />

                <NavLink to="/products"> Back </NavLink>

                <span> | </span>

                <NavLink to="#" onClick={deleteProduct}> Delete </NavLink> 

                <span> | </span>

                <NavLink to={"/products/edit/" + product.id}> Edit </NavLink>
                </>
                }
        </>
        }

        </div>
    );
}

export default ProductDetails;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import notifyService from "../../../Services/NotifyService";
import productService from "../../../Services/ProductsService";
import usePageTitle from "../../../Utils/usePageTitle";
import Spinner from "../../SharedArea/Spinner/Spinner";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList(): JSX.Element {

usePageTitle("Product List");

    const [products, setProducts] = useState<ProductModel[]>([]);
    const [user, setUser] = useState<UserModel>();
    

    useEffect(()=> {

        productService.getAllProducts()
            .then(products => setProducts(products))
            .catch(err => notifyService.error(err));

            setUser(authStore.getState().user);
            const unsubscribe = authStore.subscribe(() => setUser(authStore.getState().user));
            return () => unsubscribe();


    }, []);
    
    return (
        <div className="ProductList">


            { products.length === 0 && <Spinner /> }

            {user && <NavLink to="/products/new">➕</NavLink>}
            
			{products.map(p => <ProductCard key={p.id} product={p}></ProductCard>)}

        </div>
    );
}

export default ProductList;

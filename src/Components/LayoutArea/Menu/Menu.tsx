import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import TotalOutOfStock from "../../ProductsArea/TotalOutOfStock/TotalOutOfStock";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import "./Menu.css";

function Menu(): JSX.Element {

    const [user, setUser] = useState<UserModel>();

    useEffect(()=> {

            setUser(authStore.getState().user);
            const unsubscribe = authStore.subscribe(() => setUser(authStore.getState().user));
            return () => unsubscribe();


    }, []);

    return (
        <div className="Menu">

            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/employees">Employees</NavLink>
            {user && <NavLink to="/categories">Categories</NavLink>}
            <TotalProducts />
            <TotalOutOfStock />
        </div>
    );
}

export default Menu;

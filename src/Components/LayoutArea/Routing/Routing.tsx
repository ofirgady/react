import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import PageNotFound from "../PageNotFound/PageNotFound";
import LoadableExport from "react-loadable";
import Spinner from "../../SharedArea/Spinner/Spinner";
import EmployeeList from "../../EmployeesArea/EmployeeList/EmployeeList";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import CategoryList from "../../CategoriesArea/CategoryList/CategoryList";

function Routing(): JSX.Element {

    const LazyAbout = LoadableExport({
        loader: () => import("../../AboutArea/About/About"),
        loading: Spinner
    });

    return (
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/details/:id" element={<ProductDetails />} />
                <Route path="/products/new" element={<AddProduct />} />
                <Route path="/products/edit/:id" element={<EditProduct />} />
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/categories" element={<CategoryList />} />
                <Route path="/about" element={<LazyAbout />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
    );
}

export default Routing;

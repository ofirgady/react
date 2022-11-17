import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ProductsAction, ProductsState } from "../../../Redux/ProductsState";
import "./TotalOutOfStock.css";

function TotalOutOfStock(): JSX.Element {

    const count : number = +useSelector<ProductsState>(productsState => {
        return productsState.products.filter(p => +p.stock === 0).length;
    });

    const dispatch = useDispatch(); // not in use in this component...

    return (
        <div className="TotalOutOfStock Box">
			<span>Total Out Of Stock: {count}</span>
        </div>
    );
}

export default TotalOutOfStock;

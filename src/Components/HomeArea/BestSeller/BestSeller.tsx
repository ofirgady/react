import { useState } from "react";
import "./BestSeller.css";

function BestSeller(): JSX.Element {


    const [name, setName] = useState<string>("");

    const [totalItems, setTotalItems] = useState<number>(0);
    

    function show() : void {
        setName("Falafel ana aaref");
        setTotalItems(10);
    }

    return (
        <div className="BestSeller Box">
			<button onClick={show}>Show Best Sellers</button>
            <span> Name: {name}, total Items: {totalItems} </span>
        </div>
    );
}

export default BestSeller;

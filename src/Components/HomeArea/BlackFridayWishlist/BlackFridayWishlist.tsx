import { ChangeEvent, useState } from "react";
import "./BlackFridayWishlist.css";



function BlackFridayWishlist(): JSX.Element {


    const [item, setItem] = useState<string>("");

    const [items, setItems] = useState<string[]>([]);
    function handleItem(args: ChangeEvent<HTMLInputElement>): void {
        const value = args.target.value;
        setItem(value);
    }

    function addItem(): void {
        const duplicate = [...items, item];
        setItems(duplicate);
        setItem("");

    }

    return (
        <div className="BlackFridayWishlist Box">
            <label>Black Friday Wishlist: </label>
            <input type="text" value={item} onChange={handleItem} />
            <button onClick={addItem}>Add</button>
            {items.length > 0 && items.map((item, index) => <span key={index}> | {item} </span>)}
             {items.length === 0 && <span>there are no items yet</span>}
			
        </div>
    );
}

export default BlackFridayWishlist;

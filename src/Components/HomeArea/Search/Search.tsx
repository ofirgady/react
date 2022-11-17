import { ChangeEvent, SyntheticEvent, useState } from "react";
import notifyService from "../../../Services/NotifyService";
import "./Search.css";

function Search(): JSX.Element {

    const [item, setItem] = useState<string>("");

    function handleItem(args: ChangeEvent<HTMLInputElement>): void {
        const value = args.target.value;
        setItem(value);
    }

    function searchWebsite(): void {
        notifyService.success("Searching for " + item);
        setItem("");
    }

    
    return (
        <div className="Search Box">
			<label>Search: </label>
            <input type="search" value={item} onChange={handleItem} />
            <button onClick={searchWebsite}>🔎</button>
        </div>
    );
}

export default Search;

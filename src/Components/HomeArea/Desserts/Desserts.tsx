import "./Desserts.css";
import dessertImage from "../../../Assets/Images/Desserts.jpg";
import { SyntheticEvent } from "react";
import notifyService from "../../../Services/NotifyService";

function Desserts(): JSX.Element {
    const items: {id:number, name:string }[] = [
        {id: 1, name:"Ice Cream"},
        {id: 2, name:"Apple PIe"},
        {id: 3, name:"Eclair"}
    ];


    function totalDesserts(args: SyntheticEvent): void {
        console.log(args.target); //the component raised the event
        notifyService.success("Total Desserts: " + items.length);
    }

    return (
        <div className="Desserts Box">
            <img src={dessertImage}></img>
             Our Desserts:
             {items.length > 0 && items.map(item => <span key={item.id}> {item.name} 🍰 </span>)}
             {items.length === 0 && <span>there are no desserts available</span>}
             <button onClick={totalDesserts}>Total Desserts</button>
        </div>
    );
}

export default Desserts;

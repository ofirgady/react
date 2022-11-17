import BackgroundByHour from "../../SharedArea/BackgroundByHour/BackgroundByHour";
import "./Orders.css";

function Orders(): JSX.Element {
    return (
        <div className="Orders">
			<span> Delivery hours: 09:00 to 21:00</span>
        </div>
    );
}

export default BackgroundByHour(Orders);

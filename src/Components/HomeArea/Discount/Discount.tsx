import "./Discount.css";

function Discount(): JSX.Element {
    const discount: number = 10;
    return (
        <div className="Discount Box">
            {discount > 0 && <span>Only Now - {discount}% Discount on all products!</span>}
			{discount === 0 && <span>Today we have no discounts</span>}
        </div>
    );
}

export default Discount;

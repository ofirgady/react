import "./Spinner.css";
import imgSource from "../../../Assets/Images/loading.gif"

function Spinner(): JSX.Element {
    return (
        <div className="Spinner">

            <img src={imgSource}/>
			
        </div>
    );
}

export default Spinner;

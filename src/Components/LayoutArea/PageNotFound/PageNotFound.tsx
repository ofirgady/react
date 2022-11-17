import { NavLink } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
			<p> The page you are looking for doesn't exist.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/t3otBjVZzT0?autoplay=true" allow="autoplay" title="Page not Found"></iframe>
            <hr />
            <NavLink to="/home">back to home page</NavLink>
        </div>
    );
}

export default PageNotFound;

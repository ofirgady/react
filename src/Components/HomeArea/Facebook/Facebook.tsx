import css from "./Facebook.module.css"
function Facebook(): JSX.Element {
    return (
        <div className={css.Facebook + " Box"}>
			<span className={css.CoolText + ' ' + css.LargeText}>FACEBOOK PAGE: http://Facebook.com/northwind</span>
        </div>
    );
}

export default Facebook;

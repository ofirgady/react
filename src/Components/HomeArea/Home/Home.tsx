import notifyService from "../../../Services/NotifyService";
import usePageTitle from "../../../Utils/usePageTitle";
import DayPartIcon from "../../SharedArea/DayPartIcon/DayPartIcon";
import BestSeller from "../BestSeller/BestSeller";
import BlackFridayWishlist from "../BlackFridayWishlist/BlackFridayWishlist";
import Clock from "../Clock/Clock";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Facebook from "../Facebook/Facebook";
import Orders from "../Orders/Orders";
import Sale from "../Sale/Sale";
import Search from "../Search/Search";
import Survey from "../Survey/Survey";
import Tune from "../Tune/Tune";
import "./Home.css";

function Home(): JSX.Element {

usePageTitle("Home Page");

function handleSurvey(surveyReport: string) {
    notifyService.success("Survey Result: " + surveyReport)
}

    return (
        <div className="Home">
            {/* interpolations , conditional rendering */}
			<Discount />

            {/* displayLists */}
            <Desserts />

            {/* props */}
            <Sale category="Beverages" percent={10} />
            <Sale category="Candies" percent={15} />

            {/* Child to Parent flow */}
            <Survey SurveyQuestion="How is our Service?" handleSurvey={handleSurvey} />

            {/* state: */}
            <BestSeller />

            {/* useRef */}
            <Tune />

            {/* Two-way binding */}
            <Search />

            {/* useEffect */}
            <Clock />

            <BlackFridayWishlist />

            {/* css modules */}
            <Facebook />

            {/* HOC */}
            <Orders />


        </div>
    );
}

export default Home;

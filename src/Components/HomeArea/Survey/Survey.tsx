import "./Survey.css";

interface SurveyProps {
    handleSurvey: (str: string) => void;
    SurveyQuestion: string;
}

function Survey(props: SurveyProps): JSX.Element {

// {
    // function Poor(): void {
    //     props.handleSurvey("Poor");
    // }

    // function Medium(): void {
    //     props.handleSurvey("Medium");

    // }

    // function Good(): void {
    //     props.handleSurvey("Good");

    // }
// }
    function sendResult(result: string) :void {
        props.handleSurvey(result);
    }
    return (
        <div className="Survey Box">
			<span>{props.SurveyQuestion}</span>
            <button onClick={() => sendResult("Poor")}>Poor</button>
            <button onClick={() => sendResult("Medium")}>Medium</button>
            <button onClick={() => sendResult("Good")}>Good</button>
        </div>
    );
}

export default Survey;

import { memo } from "react";
import "./DayPartIcon.css";

interface DayPartIconProps {
	hour: number;
}

function getIconByHour(hh: number): string {
    if(hh >=6 && hh <=10) return "☕";
    if(hh >=11 && hh <=15) return "🥩";
    if(hh >=16 && hh <=20) return "🍰";
    return "🍺";
}
function DayPartIcon(props: DayPartIconProps): JSX.Element {
    
    console.log("DayPartIcon is being rendered");
    

    
    return (
        <div className="DayPartIcon">
			<span>{getIconByHour(props.hour)}</span>
        </div>
    );
}

// will render again only when props changed:
// export default memo(DayPartIcon);

 //will render again only when second function returns true:
export default memo(DayPartIcon, (prevProps, currProps) => getIconByHour(prevProps.hour) === getIconByHour(currProps.hour)); // will render again only when props changed.

//memo - memoization = to be remembered

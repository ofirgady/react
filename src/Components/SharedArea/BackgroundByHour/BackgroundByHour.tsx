import "./BackgroundByHour.css";

// HOC - higher Order Component

function BackgroundByHour(InnerComponent: Function): Function {

    function getColorByHour() {
        const now = new Date();
        let hour = now.getHours();
        if(hour> 12) hour = 24 -hour;
        const hue = Math.floor(hour *255 /12);
        const color = `rgb(${hue},${hue},${hue})`;
        return color;
    }

    const style = {
        backgroundColor: getColorByHour(),
        display: "inline-block"
    };

    return function(props: any ) {
        return (
            <div style={style} className="Box">
                <InnerComponent {...props} />
            </div>
        );
    };
}

export default BackgroundByHour;

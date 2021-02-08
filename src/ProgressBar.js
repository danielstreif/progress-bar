import "./ProgressBar.css";
import { useState } from "react";

export default function ProgressBar(props) {
    const [error, setError] = useState(false);

    const percentage = () => {
        if (props.percentage >= 0 && props.percentage <= 100) {
            return props.percentage;
        } else if (
            props.value >= props.minValue &&
            props.value <= props.maxValue &&
            props.minValue < props.maxValue
        ) {
            return (
                ((props.value - props.minValue) * 100) /
                (props.maxValue - props.minValue)
            );
        } else {
            if (props.percentage < 0) {
                console.log("You provided a negative percentage.");
            } else if (props.percentage > 100) {
                console.log("You provided a percentage above 100.");
            } else {
                console.log("You provided invalid values.");
            }
            return setError(true);
        }
    };

    return (
        <div className="progress-bar">
            {!error && (
                <div className="filler" style={{ width: `${percentage()}%` }}>
                    <div className="info-text">{`${percentage()}%`}</div>
                </div>
            )}
            {error && (
                <div className="error-filler">
                    <div className="error-text">⚠️</div>
                </div>
            )}
        </div>
    );
}

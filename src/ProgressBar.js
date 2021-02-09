import "./ProgressBar.css";
import { useState } from "react";

export default function ProgressBar({ percentage, value, minValue, maxValue }) {
    const [error, setError] = useState(false);

    const progress = () => {
        if (percentage >= 0 && percentage <= 100) {
            return percentage;
        } else if (
            value >= minValue &&
            value <= maxValue &&
            minValue < maxValue
        ) {
            return ((value - minValue) * 100) / (maxValue - minValue);
        } else {
            if (percentage < 0) {
                console.log("You provided a negative percentage.");
            } else if (percentage > 100) {
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
                <div className="filler" style={{ width: `${progress()}%` }}>
                    <div className="info-text">{`${progress()}%`}</div>
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

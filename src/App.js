import ProgressBar from "./ProgressBar";

function App() {
    return (
        <div style={{ maxWidth: "800px" }}>
            <h1>ProgressBar component</h1>

            <h2>Simple usage</h2>
            <ProgressBar percentage={0} />
            <ProgressBar percentage={1} />
            <ProgressBar percentage={42} />
            <ProgressBar percentage={99} />
            <ProgressBar percentage={100} />

            <h2>Value based usage</h2>
            <ProgressBar value={20} minValue={0} maxValue={100} />

            <h2>Error handling</h2>
            <ProgressBar percentage={-4} />
            <ProgressBar percentage={150} />
            <ProgressBar maxValue={99} value={120} />
            <ProgressBar minValue={10} value={-80} />
        </div>
    );
}

export default App;

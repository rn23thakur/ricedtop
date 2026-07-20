import EdgeTrigger from "../edges/EdgeTrigger";
import EdgePanel from "../edges/EdgePanel";

const EDGE = "bottom-edge";
const FEATURE_NAME = "launcher";

function Launcher({ activePanel, setActivePanel }) {
    const isOpen = activePanel === FEATURE_NAME;

    return (
        <>
            <EdgeTrigger
                edge={EDGE}
                onActivate={() => setActivePanel(FEATURE_NAME)}
                style={{ left: 0, right: 0, width: "40%", margin: "0 auto" }}
            />
            <EdgePanel
                edge={EDGE}
                featureName={FEATURE_NAME}
                style={{ left: 0, right: 0, width: "60%", margin: "0 auto" }}
                isOpen={isOpen}
                onClose={() => setActivePanel(null)}
            >
                <h1>Launcher</h1>
            </EdgePanel>
        </>
    );
}

export default Launcher;
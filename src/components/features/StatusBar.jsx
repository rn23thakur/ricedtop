import EdgeTrigger from "../edges/EdgeTrigger";
import EdgePanel from "../edges/EdgePanel";

const EDGE = "top-edge";
const FEATURE_NAME = "status-bar";

function StatusBar({ activePanel, setActivePanel }) {
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
                isOpen={isOpen}
                onClose={() => setActivePanel(null)}
            >
            </EdgePanel>
        </>
    );
}   
export default StatusBar;
import EdgeTrigger from "../edges/EdgeTrigger";
import EdgePanel from "../edges/EdgePanel";

const EDGE = "right-edge";
const FEATURE_NAME = "volume";

function VolumeBar({ activePanel, setActivePanel }) {
    const isOpen = activePanel === FEATURE_NAME;

    return (
        <>
            <EdgeTrigger
                edge={EDGE}
                onActivate={() => setActivePanel(FEATURE_NAME)}
                style={{ top: 0, bottom: 0, height: "40%", margin: "auto 0" }}
            />
            <EdgePanel
                edge={EDGE}
                featureName={FEATURE_NAME}
                style={{ top: 0, bottom: 0, height: 400, margin: "auto 0", width: 260 }}
                isOpen={isOpen}
                onClose={() => setActivePanel(null)}
            >
                <h1>Volume</h1>
            </EdgePanel>
        </>
    );
}

export default VolumeBar;
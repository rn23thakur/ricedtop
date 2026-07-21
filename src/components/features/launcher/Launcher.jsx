import { useState } from "react";
import EdgeTrigger from "../../edges/EdgeTrigger";
import EdgePanel from "../../edges/EdgePanel";
import SearchBar from "./SearchBar";

const EDGE = "bottom-edge";
const FEATURE_NAME = "launcher";


function Launcher({ activePanel, setActivePanel }) {
    const [query, setQuery] = useState("")
    const [selectedIndex, setSelectedIndex] = useState(0)
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
                style={{ left: 0, right: 0, width: "60%", margin: "0 auto", height: "50vh" }}
                isOpen={isOpen}
                onClose={() => setActivePanel(null)}
            >
                <div className="launcher-wrapper">
                <SearchBar
                    isOpen={isOpen}
                    query={query}
                    setQuery={setQuery}
                    />
                </div>
            </EdgePanel>
        </>
    );
}

export default Launcher;
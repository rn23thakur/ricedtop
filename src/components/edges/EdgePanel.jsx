import "../../css/EdgePanel.css";
import Notch from "./Notch";
import { motion } from "motion/react";

const BUFFER = 80;

const slideVariants = {
    top: { hidden: { y: "-100%" }, visible: { y: "0%" } },
    bottom: { hidden: { y: "100%" }, visible: { y: "0%" } },
    right: { hidden: { x: "100%" }, visible: { x: "0%" } },
    left: { hidden: { x: "-100%" }, visible: { x: "0%" } },
};

const cornersBySide = {
    top: ["top-left", "top-right"],
    bottom: ["bottom-left", "bottom-right"],
    right: ["top-right", "bottom-right"],
    left: ["top-left", "bottom-left"],
};

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function EdgePanel({ edge, featureName, isOpen, onClose, children }) {
    const pinnedSide = edge.split("-")[0];
    const variants = slideVariants[pinnedSide];
    const corners = cornersBySide[pinnedSide];
    const paddingKey = `padding${capitalize(pinnedSide)}`;

    return (
        <motion.div
            className={`edge-panel edge-panel-${featureName}`}
            layout
            style={{ [paddingKey]: BUFFER + 20, [pinnedSide]: -BUFFER }}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={variants}
            transition={{ type: "spring", stiffness: 500, damping: 40 }}
            onMouseLeave={onClose}
        >
            {corners.map((corner) => (
                <Notch key={corner} edge={edge} corner={corner} isOpen={isOpen} buffer={BUFFER} />
            ))}
            {children}
        </motion.div>
    );
}

export default EdgePanel;

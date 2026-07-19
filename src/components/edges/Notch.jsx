import { motion } from "motion/react";

const NOTCH_SIZE = 20;
const OPPOSITE = { top: "bottom", bottom: "top", left: "right", right: "left" };

function getOffsetDirection(corner, pinnedSide) {
    return corner.split("-").find((word) => word != pinnedSide);
}

function getNotchStyle(edge, corner, buffer) {
    const pinnedSide = edge.split("-")[0];
    const offsetDirection = getOffsetDirection(corner, pinnedSide);
    const gradientOpposite = OPPOSITE[pinnedSide];

    return {
        position: "absolute",
        width: NOTCH_SIZE,
        height: NOTCH_SIZE,
        [pinnedSide]: buffer + 10,
        [offsetDirection]: -NOTCH_SIZE,
        background: `radial-gradient(circle at ${gradientOpposite} ${offsetDirection}, transparent ${NOTCH_SIZE}px, color-mix(in srgb, var(--desktop-bg) var(--panel-opacity), transparent) ${NOTCH_SIZE}px)`,
    };
}

function Notch({ edge, corner, isOpen, buffer = 0 }) {
    const style = getNotchStyle(edge, corner, buffer)
    
    return (
        <motion.div
            style={style}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
            }}
            transition={{ duration: 0.15, delay: isOpen ? 0.1 : 0 }}
        />
    );
}

export default Notch;
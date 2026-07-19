import "../../css/EdgeTrigger.css";

const TRIGGER_THICKNESS = 20;

function EdgeTrigger({ edge, onActivate, style, children }) {
    const pinnedSide = edge.split("-")[0];
    
    const isHorizontal = pinnedSide === "top" || pinnedSide === "bottom";
    const computedStyle = {
        [pinnedSide]: 0,
        height: isHorizontal ? TRIGGER_THICKNESS : (style?.height ?? "100%"),
        width: isHorizontal ? (style?.width ?? "100%") : TRIGGER_THICKNESS,
        ...(isHorizontal ? { left: style?.left ?? 0 } : { top: style?.top ?? 0 }),
        ...style,
    }
    return (
        <div
            className={`edge-trigger edge-trigger-${pinnedSide}`}
            style={computedStyle}
            onMouseEnter={onActivate}
        >
            { children }
        </div>
    );
}

export default EdgeTrigger;
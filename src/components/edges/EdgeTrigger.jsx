import "../../css/EdgeTrigger.css";

function EdgeTrigger({ edge, onActivate, children }) {
    return (
        <div
            className={`edge-trigger edge-trigger-${edge}`}
            onMouseEnter={onActivate}
        >
            { children }
        </div>
    );
}

export default EdgeTrigger;
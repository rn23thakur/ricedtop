import "../../css/EdgePanel.css";

function EdgePanel({ edge, isOpen, onClose, children }) {
	return (
		<div
			className={`edge-panel edge-panel-${edge} ${isOpen? "edge-panel-open" : ""}`}
			onMouseLeave={onClose}
		>
			{children}
		</div>
	);
}

export default EdgePanel;

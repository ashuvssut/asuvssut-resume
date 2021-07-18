import React from "react";
import styles from "./tooltip.module.scss";

function Tooltip({ title, opacity }) {
	return (
		<div className={styles.wrapper} style={{ opacity: opacity, visibility: opacity === 0 && "hidden" }}>
			<div className={styles.tooltip}>{title}</div>
		</div>
	);
}

export default Tooltip;

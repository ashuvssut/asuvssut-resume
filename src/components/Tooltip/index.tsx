import { FC } from "react";
import styles from "./tooltip.module.scss";

interface ITooltip {
	title: string;
	opacity: number;
}

export const Tooltip: FC<ITooltip> = ({ title, opacity }) => {
	return (
		<div
			className={styles.wrapper}
			style={{ opacity: opacity, visibility: opacity === 0 ? "hidden" : undefined }}
		>
			<div className={styles.tooltip}>{title}</div>
		</div>
	);
};

export default Tooltip;

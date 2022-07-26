import { FC } from "react";
import style from "./preloader.module.scss";

export const Preloader: FC = () => {
	return (
		<div className={style.preloader}>
			<div className={style.spinner}></div>
		</div>
	);
};

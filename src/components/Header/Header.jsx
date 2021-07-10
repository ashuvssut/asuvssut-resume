import React from "react";
import styles from "./header.module.scss";
import akAvatar from "./../../assets/header/ak.jfif";
import { PictureAsPdf } from "@material-ui/icons";
import { Avatar, makeStyles } from "@material-ui/core";

function Header() {
	const useStyles = makeStyles({
		avatar: {
			display: "flex",
			"& > *": {
				margin: 8,
			},
		},
	});

	const classes = useStyles();

	return (
		<>
			<header className={styles.header}>
				<div className={classes.root}>
					<Avatar alt="ashuvssut" src={akAvatar} />
				</div>
				<div className={styles.downloadButton}>
					<PictureAsPdf fontSize="small" />
					Download PDF
				</div>
			</header>
			<div className={styles.spacer}></div>
		</>
	);
}

export default Header;

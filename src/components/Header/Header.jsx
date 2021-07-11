import React from "react";
import styles from "./header.module.scss";
import akAvatar from "./../../assets/header/ak.jfif";
import { PictureAsPdf, Link } from "@material-ui/icons";
import { Avatar, makeStyles } from "@material-ui/core";

function Header() {
	const useStyles = makeStyles(theme => ({
		header: {
			[theme.breakpoints.down("xs")]: {
				justifyContent: "space-around",
			},
		},
		avatarDiv: {
			display: "block",
			[theme.breakpoints.down("xs")]: {
				display: "none",
			},
		},
		avatar: {
			"& > *": {
				margin: 8,
			},
		},
	}));

	const classes = useStyles();

	return (
		<>
			<header className={styles.header + " " + classes.header}>
				<div className={classes.avatarDiv}>
					<Avatar alt="ashuvssut" src={akAvatar} className={classes.avatar} />
				</div>
				<div className={styles.right}>
					<div className={styles.button}>
						<PictureAsPdf fontSize="small" />
					</div>
					<div className={styles.button}>
						<Link fontSize="small" />
						Copy Download link
					</div>
				</div>
			</header>
			<div className={styles.spacer}></div>
		</>
	);
}

export default Header;

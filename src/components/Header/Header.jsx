import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import Logo from "./../../assets/_logo/logo.png";
import { AccountCircle, Add, ExitToApp, Settings } from "@material-ui/icons";
import {
	IconButton,
	makeStyles,
	Button,
	Typography,
	ListItem,
	List,
	Divider,
} from "@material-ui/core";

function Header() {
	const useStyles = makeStyles({});

	const classes = useStyles();

	return (
		<>
			<header className={styles.header}></header>
			<div className={styles.spacer}></div>
		</>
	);
}

export default Header;

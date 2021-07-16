import React, {useState} from "react";
import styles from "./header.module.scss";
import akAvatar from "./../../assets/header/ak.jfif";
import {
	PictureAsPdf,
	// Link
} from "@material-ui/icons";
import { Avatar, makeStyles } from "@material-ui/core";

function Header() {
	const [loading, setLoading] = useState(false);
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

	function _arrayBufferToBase64(buffer) {
		var binary = "";
		var bytes = new Uint8Array(buffer);
		var len = bytes.byteLength;
		for (var i = 0; i < len; i++) {
			binary += String.fromCharCode(bytes[i]);
		}
		return window.btoa(binary);
	}

	const generatePdf = async () => {
		setLoading(true);
		const resumeHTML = document.getElementById("resume-wrap").innerHTML;
		const data = { html: resumeHTML };
		// console.log(data);
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};

		try {
			const response = await fetch("https://html2pdf-ashuvssut.herokuapp.com/generatePdf", options);
			const responseMessage = await response.json();
			setLoading(false)
			console.log(responseMessage)
			const pdfBuffer = responseMessage.pdfBuffer.data;
			const base64String = _arrayBufferToBase64(pdfBuffer);

			const linkSource = `data:application/pdf;base64,${base64String}`;
			const downloadLink = document.createElement("a");
			const fileName = "Resume _ Ashutosh Khanduala.pdf";
			downloadLink.href = linkSource;
			downloadLink.download = fileName;
			downloadLink.click();
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<header className={styles.header + " " + classes.header}>
				<div className={classes.avatarDiv}>
					<Avatar alt="ashuvssut" src={akAvatar} className={classes.avatar} />
				</div>
				<div className={styles.right}>
					{!loading ? (
						<div className={styles.button} onClick={generatePdf}>
							Download
							<PictureAsPdf fontSize="small" />
						</div>
					) : (
						<div className={styles.button}>
							Generating...
							{/* <PictureAsPdf fontSize="small" /> */}
						</div>
					)}
					{/* <div className={styles.button}>
						<Link fontSize="small" />
						Copy Download link
					</div> */}
				</div>
			</header>
			<div className={styles.spacer}></div>
		</>
	);
}

export default Header;

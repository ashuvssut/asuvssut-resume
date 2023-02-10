import { FC, useState } from "react";
import styles from "./header.module.scss";
import akAvatar from "assets/header/ak.jfif";
import { PictureAsPdf, Link } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import { Tooltip } from "components/Tooltip";

export const Header: FC = () => {
	const [loading, setLoading] = useState(false);
	const [opacity, setOpacity] = useState(0);

	function _arrayBufferToBase64(buffer: ArrayBufferLike) {
		var binary = "";
		var bytes = new Uint8Array(buffer);
		for (var i = 0; i < bytes.byteLength; i++) {
			binary += String.fromCharCode(bytes[i]!);
		}
		return window.btoa(binary);
	}

	const generatePdf = async () => {
		setLoading(true);
		const resumeHTML = document.getElementById("resume-wrap")!.innerHTML;
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
			setLoading(false);
			console.log(responseMessage);
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

	const copyLink = () => {
		setOpacity(1);
		navigator.clipboard.writeText(document.querySelector("#download")!.getAttribute("href")!);
		setTimeout(() => setOpacity(0), 1000);
	};

	return (
		<>
			<Box
				id="nav"
				sx={{
					justifyContent: { xs: "space-around" },
				}}
				className={styles.header!}
			>
				<Box sx={{ display: { xs: "none", sm: "block" } }}>
					<Avatar
						alt="ashuvssut"
						src={akAvatar}
						sx={{
							"& > *": {
								margin: 8,
							},
						}}
					/>
				</Box>
				<div className={styles.right} style={{ display: "none" }}>
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
				</div>
				<div className={styles.right}>
					<a
						id="download"
						className={styles.button}
						href="https://github.com/ashuvssut/ashuvssut-resume/raw/download/Resume%20_%20Ashutosh%20Khanduala.pdf"
					>
						Download
						<PictureAsPdf fontSize="small" />
					</a>

					<div className={styles.button} onClick={copyLink}>
						<Link fontSize="small" />
						Copy Download link
						<Tooltip title="Copied!" opacity={opacity} />
					</div>
				</div>
			</Box>
		</>
	);
};

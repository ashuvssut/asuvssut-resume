import React from "react";
import styles from "./footer.module.scss";
import Logo from "./../../assets/_logo/logo.png";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
export default function Footer(props) {
  return (
		<footer className={styles.footer}>
			<div className={styles.topShape}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
					<path
						style={{ fill: props.fill ? props.fill : "white" }}
						className={styles.svgPath}
						d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
					></path>
				</svg>
			</div>
			<div className={styles.tint}></div>
			<div className={styles.row1}>
				<div className={styles.col1}>
					<div className={styles.top}>
						<img className={styles.logo} src={Logo} alt="" />
						<p>Ashutosh Khanduala</p>
					</div>
					<a href="mailto:ashu.khanduala@gmail.com">ashu.khanduala@gmail.com</a>
					<div className={styles.socialDiv}>
						<a href="https://github.com/ashuvssut/ashuvssut-resume">
							<UseAnimations
								className={styles.icon}
								animation={github}
								size={30}
								loop={true}
								strokeColor="#ffffff"
								speed={1}
							/>
						</a>
						<a href="https://www.linkedin.com/in/ashutosh-khanduala-4b586b105/">
							<UseAnimations
								className={styles.icon}
								animation={linkedin}
								size={30}
								loop={true}
								strokeColor="#ffffff"
								speed={1}
							/>
						</a>
					</div>
				</div>
				{/* <div className={styles.subColumn}>
					<p className={styles.head}>Organization</p>
					<ul className={styles.category}>
						<a href="/">Home</a>
						<a href="/#">About</a>
						<a href="/#">FAQs </a>
					</ul>
				</div>
				<div className={styles.subColumn}>
					<p className={styles.head}>Resources</p>
					<ul className={styles.category}>
						<a href="/#">Projects</a>
						<a href="/#">Docs</a>
						<a href="/#">Learn More</a>
					</ul>
				</div> */}
			</div>
			<div className={styles.row2}>
				<p className={styles.footerText}>Made with ❤️ in India</p>
			</div>
		</footer>
	);
}

import React from "react";

import { Link1, Link2, IconLink } from "./components/Link";
import { Li1, Li2, List, LiPara } from "./components/List";
import Section from "./components/Section";
import Tags from "./components/Tags";
import { MixedTitle, H1, H2, SubTitle1, SubTitle2 } from "./components/Title";
import { ReactComponent as StackOverflow } from "./../../../assets/svg/stackoverflow.svg";
import { ReactComponent as ExtLink } from "./../../../assets/svg/ext-link.svg";
import { ReactComponent as Twitter } from "./../../../assets/svg/twitter.svg";
import { ReactComponent as LinkedIn } from "./../../../assets/svg/linkedin.svg";
import { ReactComponent as GitHub } from "./../../../assets/svg/github.svg";

import { stylesheet as ss } from "./styles";

function Resume() {
	return (
		<>
			<header style={ss.header}>
				<h1 style={ss.firstName}>
					Ashutosh <span style={ss.lastName}>Khanduala</span>
				</h1>
				<div style={ss.line}>
					<IconLink
						href="https://github.com/ashuvssut"
						color="#171515"
						icon={<GitHub />}
					>
						GitHub
					</IconLink>
					&nbsp;|&nbsp;
					<IconLink
						href="https://twitter.com/ashuvssut"
						color="#00acee"
						icon={<Twitter/>}
					>
						Twitter
					</IconLink>
					&nbsp;|&nbsp;
					<IconLink
						href="https://www.linkedin.com/in/ashuvssut/"
						color="#0e76a8"
						icon={<LinkedIn />}
					>
						LinkedIn
					</IconLink>
					&nbsp;|&nbsp;
					<IconLink
						href="https://stackoverflow.com/users/12872199/ashutosh-khanduala?tab=reputation"
						color="#ef8236"
						icon={<StackOverflow height={20} />}
					>
						Stack Overflow
					</IconLink>
				</div>
				<div style={ss.line}>
					<Link1 href="mailto:ashu.khanduala@gmail.com">ashu.khanduala@gmail.com</Link1>&nbsp;| +91
					8114 727 882
				</div>
			</header>

			<hr />

			<section style={ss.main}>
				<div style={ss.firstCol}>
					<Section title="education" noMarginTop={true}>
						<H1>veer surendra sai university of technology</H1>
						<H2>B.tech second year in Electronics and Comm. Engg | 2019-2023</H2>
						<SubTitle1>Burla, Odisha, India</SubTitle1>
						<List>
							<Li1>CGPA : 8.36</Li1>
						</List>
					</Section>

					<Section title="skills">
						<H1>technical skills</H1>
						<SubTitle2>More Experienced in:</SubTitle2>
						<Tags
							tags={[
								"React",
								"Git",
								"Javascript",
								"C++",
								"SASS / CSS",
								"HTML",
								"GitHub Actions",
								"Chrome Dev Tools",
								"Redux",
								"bash",
							]}
						></Tags>

						<SubTitle2>Acquainted with:</SubTitle2>
						<Tags
							tags={["React Native", "NEXT.js", "Firebase", "GCP (Cloud)", "Node.js", "Express.js"]}
						></Tags>
						<div style={{ height: 5 }}></div>
						<H1>Soft skills</H1>
						<List style={{ display: "flex", flexWrap: "wrap" }}>
							<Li1>A Bilingual Communicator (English, Hindi)</Li1>
							<Li1>A Lifelong Learner</Li1>
							<Li1 style={{ transform: "translateX(25px)" }}>A Team Player</Li1>
						</List>
					</Section>

					<Section title="experience">
						<div style={ss.card}>
							<MixedTitle h1="React Dev Intern @DATOMS" h2="Internship" />
							<SubTitle2>May 2021 - July 2021 | Bhubaneshwar, India</SubTitle2>
							<List>
								<Li1>
									Developed a Form Creator WebApp using&nbsp;
									<span style={ss.spot}>React, lodash and AntDesign</span>
								</Li1>
							</List>
						</div>
						<div style={ss.card}>
							<H1>Web Dev Intern @Phoenix Robotix</H1>
							<SubTitle2>Jan 2021 - Mar 2021 | Bhubaneshwar, India</SubTitle2>
							<List>
								<Li1>
									Developed official <Link1 href="https://datoms.io/">DATOMS website</Link1> (WP)
								</Li1>
								<Li1>
									Improved website's <span style={ss.spot}>Google Page Rank:</span>
									<List>
										<Li2>
											<span style={ss.spot}>Desktop view</span> score from 24 to&nbsp;
											<span style={ss.spot}>91</span>
										</Li2>
										<Li2>
											<span style={ss.spot}>Mobile view</span> score from 6 to&nbsp;
											<span style={ss.spot}>48</span>
										</Li2>
									</List>
								</Li1>
								<Li1>
									Improved <span style={ss.spot}>GTMetrix</span> Performance grade from F to
									<span style={ss.spot}> A grade</span>
								</Li1>
							</List>
						</div>
						<div style={ss.card}>
							<MixedTitle h1="Web Developer Intern @BnB" h2="Internship" />
							<SubTitle2>June 2020 - August 2020 | India</SubTitle2>
							<List>
								<Li1>
									Developed Official <Link1 href="http://www.blessnbliss.org">BnB Website</Link1>
									&nbsp;using
									<span style={ss.spot}> HTML, CSS, JavaScript</span>.
								</Li1>
								<Li1>
									Integrated push deployment <span style={ss.spot}>(CD pipeline)</span>.
								</Li1>
							</List>
							<Link2 prefix="GitHub" href="https://github.com/ashuvssut/Bless-n-Bliss">
								repo link here.
							</Link2>
						</div>
					</Section>
					<Section title="Volunteer Experience">
						<div style={ss.card}>
							<MixedTitle h1="mentor in Frontend WebDev 101" h2="Volunteer, Mentorship" />
							<SubTitle2>January 2022 | VSSUT, Burla</SubTitle2>
							<List>
								<Li1>
									Mentored students and&nbsp;
									<span style={ss.spot}>taught Basic & Advanced CSS Concepts</span>
								</Li1>
								<Li1>
									Organized by <span style={ss.spot}>MLSA Community - Sanins</span>.
								</Li1>
							</List>
						</div>
					</Section>
				</div>

				<div style={ss.secondCol}>
					<div style={ss.card}>
						<MixedTitle h1="mentor in liftoff-c program" h2="Volunteer, Mentorship" />
						<SubTitle2>February 2021 | VSSUT, Burla</SubTitle2>
						<List>
							<Li1>
								Mentored students and <span style={ss.spot}>taught C programming basics</span>
							</Li1>
							<Li1>
								Co-organized by <span style={ss.spot}>Google Developer Students Club</span>,
								<span style={ss.spot}> CodeChef VSSUT chapter</span> and
								<span style={ss.spot}> Enigma VSSUT</span>.
							</Li1>
						</List>
					</div>
					<Section title="Achievements">
						<H1>Open Source Event Participation</H1>
						<List>
							<Li1>
								<H2>GirlScript Summer of Code</H2>
								Secured <Link1 href="https://gssoc21lb.prav.xyz/">Rank 14</Link1> and contributed in
								3 projects.
								<IconLink
									href="https://github.com/pulls?q=is%3Amerged+is%3Apr+author%3Aashuvssut+label%3AGSSOC21"
									icon={<ExtLink />}
									inline
								/>
							</Li1>
							<Li1>
								<H2>DevScript Winter of Code</H2>
								Secured <span style={ss.spot}>Rank 3 </span> and contributed in 3 projects.
								<IconLink
									href="https://github.com/pulls?q=is%3Amerged+is%3Apr+author%3Aashuvssut+label%3ADWOC"
									icon={<ExtLink />}
									inline
								/>
							</Li1>
							<Li1>
								<H2>Script Winter of Code</H2>
								Secured <span style={ss.spot}>Rank 6 </span> and contributed in 3 projects.
								<IconLink
									href="https://github.com/pulls?q=is%3Amerged+is%3Apr+author%3Aashuvssut+label%3Aswoc2021"
									icon={<ExtLink />}
									inline
								/>
							</Li1>
							<Li1>
								<H2>Mexili Winter of Code</H2>
								Secured <span style={ss.spot}>Rank 5 </span> and contributed in 2 projects.
								<IconLink
									href="https://github.com/pulls?q=is%3Amerged+is%3Apr+author%3Aashuvssut+label%3AMWOC"
									icon={<ExtLink />}
									inline
								/>
							</Li1>
						</List>
					</Section>
					<Section title="personal projects">
						<div style={ss.card}>
							<MixedTitle
								h1="Find a Donor"
								h2="React Native, Expo, Android App, Express.js, Azure Maps"
							/>
							<SubTitle2>December 2021 | Burla, India</SubTitle2>
							<Link1 href="https://github.com/ashuvssut/FindADonor" variant="small">
								https://github.com/ashuvssut/FindADonor
							</Link1>
							<List>
								<Li1>
									An App that&nbsp;
									<span style={ss.spot}>lists nearest Blood Donors & Blood Banks</span>
								</Li1>
								<Li1>
									Integrated <span style={ss.spot}>Azure Maps API</span> to create Maps that shows
									nearest Blood Donors and Blood Banks.
								</Li1>
							</List>
							<Link2
								prefix="App"
								href="https://expo.dev/artifacts/6f398b53-15a5-4abe-90a4-042a639d2db5"
							>
								link here
							</Link2>
						</div>
						<div style={ss.card}>
							<MixedTitle
								h1="Women Safety App"
								h2="Flutter, Android App, Firebase Authentication"
							/>
							<SubTitle2>December 2021 | Burla, India</SubTitle2>
							<Link1 href="https://github.com/ashuvssut/women-safety-app" variant="small">
								https://github.com/ashuvssut/women-safety-app
							</Link1>
							<List>
								<Li1>
									An App that can&nbsp;
									<span style={ss.spot}>send current location of the user</span> to her trusted list
									of contacts <span style={ss.spot}>via SMS</span>
								</Li1>
							</List>
							<Link2
								prefix="App (alpha version)"
								href="https://github.com/ashuvssut/women-safety-app/releases/tag/v0.1-alpha"
							>
								link here
							</Link2>
						</div>
						<div style={ss.card}>
							<MixedTitle h1="My Resume Website" h2="React, GitHub Actions, Puppeteer" />
							<SubTitle2>July 2021 | Burla, India</SubTitle2>
							<Link1 href="https://ashuvssut.github.io/ashuvssut-resume" variant="small">
								ashuvssut.github.io/ashuvssut-resume
							</Link1>
							<List>
								<Li1>A website to view and download my Resume</Li1>
								<Li1>
									<span style={ss.spot}>
										Developed a&nbsp;
										<Link1 href="https://github.com/ashuvssut/generatePdf-GHA">Github Action</Link1>
									</span>
									&nbsp; to <span style={ss.spot}>generate Resume PDF using puppeteer</span> from my
									Resume website and commit it to the Repository updating the old PDF version.
								</Li1>
							</List>
							<Link2 prefix="GitHub" href="https://github.com/ashuvssut/ashuvssut-resume">
								repo link here
							</Link2>
						</div>
					</Section>
					<Section title="responsibilities">
						<div style={ss.card}>
							<H1>Community Co-Lead @MLSA SANINS</H1>
							<SubTitle2>February 2021 | VSSUT, Burla</SubTitle2>
							<LiPara>
								MLSA Sanins is a <span style={ss.spot}>Student-run Tech Community</span> powered by
								Microsoft Learn Student Ambassadors Program
							</LiPara>
							<H2>MY ROLES AND RESPONSIBILITIES</H2>
							<List>
								<Li1>
									<span style={ss.spot}>Mentor students in learning events</span> to help them learn
									new technologies
								</Li1>
								<Li1>
									<span style={ss.spot}>Maintain Community Projects, Manage and Mentor Teams</span>
								</Li1>
							</List>
						</div>
					</Section>
				</div>
			</section>
		</>
	);
}

export default Resume;

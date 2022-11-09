import { FC } from "react";
import { stylesheet as ss } from "./styles";
import { StackOverflow, ExtLink, Twitter, LinkedIn, GitHub } from "assets/svg";
import { Link, LinkBr, IconLink } from "./components/Link";
import { Li1, Li2, List, LiPara } from "./components/List";
import { Section } from "./components/Section";
import { Tags } from "./components/Tags";
import { MixedTitle, H1, H2, SubTitle1, SubTitle2 } from "./components/Title";
import { B, BI } from "./components/Emphasis";

interface IResume {}
export const Resume: FC<IResume> = () => {
	return (
		<>
			<header style={ss.header}>
				<h1 style={ss.name}>
					Ashutosh <span style={{ fontWeight: 300 }}>Khanduala</span>
				</h1>
				<div style={ss.line}>
					<IconLink href="https://github.com/ashuvssut" color="#171515" icon={<GitHub />}>
						GitHub
					</IconLink>
					|
					<IconLink href="https://twitter.com/ashuvssut" color="#00acee" icon={<Twitter />}>
						Twitter
					</IconLink>
					|
					<IconLink
						href="https://www.linkedin.com/in/ashuvssut/"
						color="#0e76a8"
						icon={<LinkedIn />}
					>
						LinkedIn
					</IconLink>
					|
					<IconLink
						href="https://stackoverflow.com/users/12872199/ashuvssut?tab=profile"
						color="#ef8236"
						icon={<StackOverflow height={20} />}
					>
						Stack Overflow
					</IconLink>
					|<Link href="mailto:ashu.khanduala@gmail.com">ashu.khanduala@gmail.com</Link>| +91 8114
					727 882
				</div>
				<div style={ss.line}></div>
			</header>

			<hr />

			<section style={ss.main}>
				<div style={ss.firstCol}>
					<Section title="education" noMarginTop>
						<H1 style={{ display: "inline" }}>veer surendra sai university of technology, </H1>
						<SubTitle1 style={{ display: "inline" }}>Burla, Odisha, India</SubTitle1>
						<H2>B.tech final year in Electronics and Comm. Engg | 2019-23</H2>
						<List>
							<Li1>CGPA : 8.16</Li1>
						</List>
					</Section>

					<Section title="skills">
						<SubTitle2>Communication Languages: English, Hindi</SubTitle2>
						<H1>technical skills</H1>
						<SubTitle2>More Experienced in:</SubTitle2>
						<Tags
							tags={[
								"TypeScript",
								"Javascript",
								"React",
								"NEXT.js",
								"Redux Toolkit",
								"React Native",
								"Material UI",
								"Version Control (Git)",
								"Firebase",
								"bash",
								"SASS / CSS & HTML",
								"GitHub Actions",
							]}
						></Tags>
						<SubTitle2>Acquainted with:</SubTitle2>
						<Tags tags={["GCP (Cloud)", "Express.js", "GraphQL", "C++"]}></Tags>
						{/* <div style={{ height: 5 }}></div> */}
						{/* <H1>Soft skills</H1>
						<List style={{ display: "flex", flexWrap: "wrap" }}>
							<Li1>A Bilingual Communicator (English, Hindi)</Li1>
							<Li1>A Lifelong Learner</Li1>
							<Li1 style={{ transform: "translateX(25px)" }}>A Team Player</Li1>
						</List> */}
					</Section>

					<Section title="experience">
						<div style={ss.card}>
							<MixedTitle h1="React Dev Intern @DATOMS" h2="Internship" />
							<SubTitle2>May 2021 - July 2021 | Bhubaneshwar, India</SubTitle2>
							<List>
								<Li1>
									Developed a Form Creator WebApp using
									<B>React, lodash and AntDesign</B>
								</Li1>
							</List>
						</div>
						<div style={ss.card}>
							<H1>Web Dev Intern @Phoenix Robotix</H1>
							<SubTitle2>Jan 2021 - Mar 2021 | Bhubaneshwar, India</SubTitle2>
							<List>
								<Li1>
									Developed official<Link href="https://datoms.io/">DATOMS website</Link>(WP)
								</Li1>
								<Li1>
									Improved website's<B>Google Page Rank:</B>
									<List>
										<Li2>
											<B>Desktop view</B>score from 24 to<B>91</B>
										</Li2>
										<Li2>
											<B>Mobile view</B>score from 6 to<B>48</B>
										</Li2>
									</List>
								</Li1>
								<Li1>
									Improved<B>GTMetrix</B>Performance grade from F to
									<B>A grade</B>
								</Li1>
							</List>
						</div>
						<div style={ss.card}>
							<MixedTitle h1="Web Developer Intern @BnB" h2="Internship" />
							<SubTitle2>June 2020 - August 2020 | India</SubTitle2>
							<List>
								<Li1>
									Developed Official
									<Link href="http://blessnblissfoundation.org/">BnB Website</Link>
									using<B>HTML, CSS, JavaScript</B>.
								</Li1>
								<Li1>
									Integrated push deployment<B>(CD pipeline)</B>.
								</Li1>
							</List>
							<LinkBr prefix="GitHub" href="https://github.com/ashuvssut/Bless-n-Bliss">
								repo link here.
							</LinkBr>
						</div>
					</Section>
					<Section title="Volunteer Experience">
						<div style={ss.card}>
							<MixedTitle h1="mentor in Frontend WebDev101" h2="Mentorship" />
							<SubTitle2>January 2022 | VSSUT, Burla</SubTitle2>
							<List>
								<Li1>
									<Link
										nsp
										href="https://www.youtube.com/watch?v=5sc7aln7ok8&list=PL_LImCf-ChHUT-ddowQC0XftHznEYF396"
									>
										Mentored students
									</Link>
									and<B>taught Basic & Advanced CSS Concepts</B>
								</Li1>
								<Li1>
									Organized by<B>MLSA Community - Sanins</B>.
								</Li1>
							</List>
						</div>
						<div style={ss.card}>
							<MixedTitle h1="mentor in liftoff-c program" h2="Mentorship" />
							<SubTitle2>February 2021 | VSSUT, Burla</SubTitle2>
							<List>
								<Li1>
									Mentored students and<B>taught C programming basics</B>
								</Li1>
								<Li1>
									Co-organized by<B>Google Developer Students Club,</B>
									<B>CodeChef VSSUT chapter</B>and<B>Enigma VSSUT.</B>
								</Li1>
							</List>
						</div>
					</Section>
				</div>

				<div style={ss.secondCol}>
					<Section title="projects" noMarginTop>
						<div style={ss.card}>
							<MixedTitle h1="WalkingPal Website" h2="NEXT.js, TypeScript, Material UI, Firebase" />
							<SubTitle2>October 2022 | Burla, India</SubTitle2>
							<Link href="https://github.com/WalkingPal/walking-pal-web" variant="small">
								https://github.com/WalkingPal/walking-pal-web
							</Link>
							<List>
								<Li1>Official Website of WalkingPal created with NEXTjs & TypeScript.</Li1>
								<Li1>
									As a <B>Project Maintainer and Mentor,</B> I helped students learn React, Git
									Version Control & development best practices
								</Li1>
								<Li1>
									Collaborated to Design the&nbsp;
									<Link
										nsp
										href="https://www.figma.com/file/seUqjLLCz2X22Ymm6PZBe6/Website-%26-Other-Components?node-id=901%3A3644"
									>
										Figma Wireframes
									</Link>
									for the Website.
								</Li1>
							</List>
							<LinkBr href="https://walkingpal.in/">Visit the Website</LinkBr>
						</div>
						<div style={ss.card}>
							<MixedTitle
								h1="Find a Donor"
								h2="React Native, Expo, Android App, Express.js, Azure Maps"
							/>
							<SubTitle2>December 2021 | Burla, India</SubTitle2>
							<Link href="https://github.com/ashuvssut/FindADonor" variant="small">
								https://github.com/ashuvssut/FindADonor
							</Link>
							<List>
								<Li1>
									An App that
									<B>lists nearest Blood Donors & Blood Banks</B>
								</Li1>
								<Li1>
									Integrated<B>Azure Maps API</B>to create Maps that shows nearest Blood Donors and
									Blood Banks.
								</Li1>
							</List>
							<LinkBr
								prefix="App"
								href="https://github.com/ashuvssut/FindADonor/blob/release/release/Find-a-donor-c2259e865b8a454d80d097449a89dde3-signed.apk?raw=true"
							>
								link here
							</LinkBr>
						</div>
						<div style={ss.card}>
							<MixedTitle
								h1="Women Safety App"
								h2="Flutter, Android App, Firebase Authentication"
							/>
							<SubTitle2>December 2021 | Burla, India</SubTitle2>
							<Link href="https://github.com/ashuvssut/women-safety-app" variant="small">
								https://github.com/ashuvssut/women-safety-app
							</Link>
							<List>
								<Li1>
									An App that can
									<B>send current location of the user</B>to her<BI>trusted list</BI>of contacts
									when in danger with just one tap<B>via SMS.</B>
								</Li1>
								<Li1>
									This project took part in<B>Google DSC WoW'22 Hackathon</B>
								</Li1>
							</List>
							<LinkBr
								prefix="App (alpha release)"
								href="https://github.com/ashuvssut/women-safety-app/releases/tag/v0.1-alpha"
							>
								link here
							</LinkBr>
						</div>
						<div style={ss.card}>
							<MixedTitle
								h1="My Resume Website"
								h2="React, TypeScript, GitHub Actions, Puppeteer"
							/>
							<SubTitle2>July 2021 | Burla, India</SubTitle2>
							<Link href="https://ashuvssut.github.io/ashuvssut-resume" variant="small">
								ashuvssut.github.io/ashuvssut-resume
							</Link>
							<List>
								<Li1>A website to view and download my Resume</Li1>
								<Li1>
									<B nsp>
										Developed a
										<Link href="https://github.com/ashuvssut/generatePdf-GHA">Github Action</Link>
									</B>
									to<B>generate Resume PDF using puppeteer</B>from my Resume website and commit it
									to the Repository updating the old PDF version.
								</Li1>
							</List>
							<LinkBr prefix="GitHub" href="https://github.com/ashuvssut/ashuvssut-resume">
								repo link here
							</LinkBr>
						</div>
					</Section>
					<Section title="Achievements">
						<H1>Open Source Event Participation</H1>
						<List>
							<Li1>
								<H2>GirlScript Summer of Code</H2>
								Secured<B>Rank 14</B>and contributed in 3 projects.
								<IconLink
									href="https://github.com/pulls?q=is%3Amerged+is%3Apr+author%3Aashuvssut+label%3AGSSOC21"
									icon={<ExtLink />}
									inline
								/>
							</Li1>
							<Li1>
								<H2>DevScript Winter of Code</H2>
								Secured
								<Link href="https://web.archive.org/web/20220414095904/https%3A%2F%2Fdevscript.org%2Fwoc%2Fleaderboard%2F">
									Rank 3
								</Link>
								and contributed in 3 projects.
								<IconLink
									href="https://github.com/pulls?q=is%3Amerged+is%3Apr+author%3Aashuvssut+label%3ADWOC"
									icon={<ExtLink />}
									inline
								/>
							</Li1>
							<Li1>
								<H2>Script Winter of Code</H2>
								Secured<B>Rank 6</B>and contributed in 3 projects.
								<IconLink
									href="https://github.com/pulls?q=is%3Amerged+is%3Apr+author%3Aashuvssut+label%3Aswoc2021"
									icon={<ExtLink />}
									inline
								/>
							</Li1>
							<Li1>
								<H2>Mexili Winter of Code</H2>
								Secured<B>Rank 5</B>and contributed in 2 projects.
								<IconLink
									href="https://github.com/pulls?q=is%3Amerged+is%3Apr+author%3Aashuvssut+label%3AMWOC"
									icon={<ExtLink />}
									inline
								/>
							</Li1>
						</List>
					</Section>
					<Section title="responsibilities">
						<div style={ss.card}>
							<H1>Community Co-Lead @MLSA SANINS</H1>
							<SubTitle2>February 2021 | VSSUT, Burla</SubTitle2>
							<LiPara>
								MLSA Sanins is a<B>Student-run Tech Community</B>powered by Microsoft Learn Student
								Ambassadors Program
							</LiPara>
							<H2>MY ROLES AND RESPONSIBILITIES</H2>
							<List>
								<Li1>
									<B nsp>Mentor students in learning events</B>to help them learn new technologies
								</Li1>
								<Li1>
									<B nsp>Maintain Community Projects, Manage and Mentor Teams</B>
								</Li1>
							</List>
						</div>
					</Section>
				</div>
			</section>
		</>
	);
};

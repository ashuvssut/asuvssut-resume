import React from "react";

import { Link1, Link2 } from "./components/Link";
import { Li1, Li2, LiPara, List } from "./components/List";
import Section from "./components/Section";
import Tags from "./components/Tags";
import { MixedTitle, H1, H2, SubTitle1, SubTitle2 } from "./components/Title";

import { stylesheet as ss } from "./styles";

function Resume() {
	return (
		<>
			<header style={ss.header}>
				<h1 style={ss.firstName}>
					Ashutosh <span style={ss.lastName}>Khanduala</span>
				</h1>
				<div style={ss.line}>
					<Link1 href="https://ashuvssut.github.io/my-portfolio/">
						ashuvssut.github.io/my-portfolio/
					</Link1>
				</div>
				<div style={ss.line}>
					<Link1 href="mailto:ashu.khanduala@gmail.com">ashu.khanduala@gmail.com</Link1> | +91 8114
					727 882
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
							<Li1>CGPA : 8.1</Li1>
							<LiPara>(upto current Semester)</LiPara>
						</List>
					</Section>

					<Section title="links">
						<Link2 prefix="GitHub://" href="https://github.com/ashuvssut" removeSpace={true}>
							ashuvssut
						</Link2>
						<Link2
							prefix="LinkedIn://"
							href="https://www.linkedin.com/in/ashutosh-khanduala-4b586b105/"
							removeSpace={true}
						>
							ashutosh-khanduala
						</Link2>
						<Link2
							prefix="StackOverflow://"
							href="https://stackoverflow.com/users/12872199/ashutosh-khanduala?tab=reputation"
							removeSpace={true}
						>
							ashuvssut
						</Link2>
					</Section>

					<Section title="skills">
						<H1>technical skills</H1>
						<SubTitle2>More Experienced in:</SubTitle2>
						<Tags
							tags={["React", "Git", "Javascript", "C++", "HTML", "SASS / CSS", "Chrome Dev Tools"]}
						></Tags>

						<SubTitle2>Acquainted with:</SubTitle2>
						<Tags
							tags={[
								"Redux",
								"React Native",
								"NEXT.js",
								"Firebase",
								"GCP (Cloud)",
								"Node.js",
								"Express.js",
								"bash",
							]}
						></Tags>
						<div style={{ height: 5 }}></div>
						<H1>Soft skills</H1>
						<List>
							<Li1>A Bilingual Communicator (English, Hindi)</Li1>
							<Li1>A passionate Learner</Li1>
							<Li1>A Team Player</Li1>
							<Li1>A Problem-Solver</Li1>
						</List>
					</Section>

					<Section title="experience">
						<div style={ss.card}>
							<MixedTitle h1="devscript winter of code" h2="Open Source" />
							<SubTitle2>January 2021 - March 2021 | India</SubTitle2>
							<Link1 variant="small" href="https://devscript.tech/woc/">
								devscript.tech/woc/
							</Link1>
							<List>
								<Li1>
									Secured <Link1 href="https://devscript.tech/woc/leaderboard/">Rank-3</Link1> in
									this event.
								</Li1>

								<Li1>
									Contributed in <span style={ss.spot}>three opensource projects:</span>
								</Li1>
								<List>
									<Li2>
										<Link2 suffix="(React)" href="https://github.com/smaranjitghose/doc2pen">
											Doc2Pen
										</Link2>
									</Li2>
									<Li2>
										<Link2
											suffix="(React)"
											href="https://github.com/HITK-TECH-Community/Community-Website"
										>
											HITK-Community-website
										</Link2>
									</Li2>
									<Li2>
										<Link2
											suffix="(Next.js)"
											href="https://github.com/smaranjitghose/awesome-portfolio-websites"
										>
											awesome-portfolio-website
										</Link2>
									</Li2>
								</List>
							</List>
						</div>
						<div style={ss.card}>
							<MixedTitle h1="mentor in liftoff-c program" h2="Volunteer, Mentorship" />
							<SubTitle2>February 2021 | India</SubTitle2>
							<List>
								<Li1>
									<span style={ss.spot}>Mentored a 16 students </span>in weekly regular classes and
									doubt clearing classes
								</Li1>
								<Li1>
									Helped students learn about <span style={ss.spot}>C-programming basics</span>
								</Li1>
								<Li1>
									Co-organized by <span style={ss.spot}>Google Developer Students Club</span>,
									<span style={ss.spot}> CodeChef VSSUT chapter</span> and
									<span style={ss.spot}> Enigma VSSUT</span>.
								</Li1>
							</List>
						</div>
					</Section>
				</div>

				<div style={ss.secondCol}>
					<div style={ss.card}>
						<MixedTitle h1="Web Developer Intern @BnB" h2="Internship" />
						<SubTitle2>June 2020 - August 2020 | India.</SubTitle2>
						<Link1 href="http://www.blessnbliss.org" variant="small">
							www.blessnbliss.org
						</Link1>
						<List>
							<Li1>
								<span style={ss.spot}>Developed Official BnB Website</span> using
								<span style={ss.spot}> HTML, CSS, JavaScript</span>.
							</Li1>
							<Li1>
								Integrated push deployment (<span style={ss.spot}>DevOps</span>).
							</Li1>
						</List>
						<Link2 prefix="GitHub" href="https://github.com/ashuvssut/Bless-n-Bliss">
							repo link here.
						</Link2>
					</div>
					<Section title="personal projects">
						<div style={ss.card}>
							<MixedTitle h1="morse code project" h2="WebApp, used JS Web Audio API" />
							<SubTitle2>August 2020 | Burla, India.</SubTitle2>
							<Link1 href="https://ashuvssut.github.io/the-morse-code-project/" variant="small">
								ashuvssut.github.io/the-morse-code-project/
							</Link1>
							<List>
								<Li1>
									A WebApp that <span style={ss.spot}>teaches people Morse Code</span> and helps
									them remember Morse codes easily.
								</Li1>
								<Li1>
									Used <span style={ss.spot}>HTML, SASS</span> and
									<span style={ss.spot}> JavaScript</span>.
								</Li1>
								<Li1>
									Used <span style={ss.spot}>JS WebAudio API</span> to:
								</Li1>
								<List>
									<Li2>Generate the morse code sounds by giving binary inputs</Li2>
									<Li2>Make an adjustable Noise generator. </Li2>
								</List>
								<Link2 prefix="GitHub" href="https://github.com/ashuvssut/the-morse-code-project">
									repo link here
								</Link2>
							</List>
						</div>
						<div style={ss.card}>
							<MixedTitle h1="Covid19 webapp" h2="Express.js, WebApp" />
							<SubTitle2>July 2020 | Burla, India</SubTitle2>
							<Link1 variant="small" href="https://coronalytics-ashuvssut.herokuapp.com/">
								coronalytics-ashuvssut.herokuapp.com
							</Link1>
							<List>
								<Li1>
									A WebApp that instantly
									<span style={ss.spot}> fetches COVID19 Stats of any Country</span> from an{" "}
									<Link1
										varian="small"
										href="https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest"
									>
										API.
									</Link1>
								</Li1>
								<Li1>
									Used <span style={ss.spot}>HTML, SASS, JavaScript</span> and
									<span style={ss.spot}> Express.js.</span>
								</Li1>
								<Li1>Automatically fetches your location to give your Country's COVID19 stats.</Li1>
								<Link2 prefix="GitHub" href="https://github.com/ashuvssut/COVID19-webApp">
									repo link here
								</Link2>
							</List>
						</div>
					</Section>
				</div>
			</section>
		</>
	);
}

export default Resume;

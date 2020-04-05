import React from 'react'

import { Icon, Layout, Link, Resume, SEO, WaveSection } from 'src/components'
import { github } from 'src/links'

const ResumePage = () => (
	<Layout activePage="resume">
		<SEO title="Joe McGrath Resume" />
		<Resume>
			<WaveSection disableTopMargin>
				<p>
					Here's an overview of some of the things I've worked on
					since I started building software for the web way back in
					2009. For more details, download my resume as a PDF, or
					check out some of my code on GitHub!
				</p>
				<p>
					<Link to="/joe-mcgrath-resume.pdf" external button>
						Download Resume
					</Link>
					&nbsp;
					<Link to={github} secondary button>
						<Icon name="GitHub" /> Visit GitHub
					</Link>
				</p>
			</WaveSection>
			<Resume.Position
				name="Webflow"
				link="https://webflow.com"
				start="May 2019"
			>
				<Resume.Role name="Senior Software Engineer" />
				<Resume.Description>
					<p>
						Software engineer contributing to a visual website
						design and development platform with over a million
						customers. Worked on various high-impact features across
						multiple teams, including content editor, multi-user,
						comments, activity log, and internal codebase decoupling
						& modularisation.
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position name="Refract" link="https://refract.js.org">
				<Resume.Description>
					<p>
						Maintainer​ of ​Refract​, a library which combines
						​React​ with ​RxJS​ and other reactive programming
						libraries.
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position
				name="FanDuel"
				link="https://www.fanduel.com"
				start="December 2017"
				end="May 2019"
			>
				<Resume.Role
					name="Senior Software Engineer"
					start="July 2018"
					end="May 2019"
				/>
				<Resume.Role
					name="Software Engineer"
					start="December 2017"
					end="July 2018"
				/>
				<Resume.Description>
					<p>
						UI engineer building a daily fantasy sports app which
						serves millions of users. Includes line management,
						partnering with stakeholders across the company, and
						working with multiple teams to drive innovation in the
						company's customer-facing web app.
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position
				name="Brainnwave"
				link="https://www.brainnwave.com"
				start="October 2018"
				end="May 2019"
			>
				<Resume.Role name="Senior Software Engineer" />
				<Resume.Description>
					<p>
						UI engineer building a business intelligence and
						analysis platform. Part-time position alongside
						full-time job at FanDuel.
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position
				name="Beezer"
				link="https://www.beezer.com"
				start="July 2017"
				end="June 2018"
			>
				<Resume.Role name="Frontend Developer" />
				<Resume.Description>
					<p>
						Frontend Developer​ at a SaaS startup building an
						innovative PWA-creation platform aimed at non-technical
						users. Transitioned to part-time after joining FanDuel.
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position
				name="Midnight Sun"
				start="August 2013"
				end="April 2015"
			>
				<Resume.Description>
					<p>
						Working with my partner in our spare time—we developed a
						real-time multiplayer online game and managed the
						community which grew around it.
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position
				name="Untitled"
				link="https://www.untitledtm.com"
				start="October 2009"
				end="July 2017"
			>
				<Resume.Role
					name="Lead Web Developer"
					start="July 2012"
					end="July 2017"
				/>
				<Resume.Role
					name="Web Developer"
					start="January 2010"
					end="July 2012"
				/>
				<Resume.Role
					name="Intern Web Developer"
					start="October 2009"
					end="January 2010"
				/>
				<Resume.Description>
					<p>
						Web developer at a WordPress agency, building dozens of
						sites for small to medium enterprises, including custom
						functionality built using JavaScript. Projects were
						primarily brochureware, plus occasional e-commerce
						sites, interactive knowledgebase systems, or similar.
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position name="Education" subtext="Mid Cheshire College">
				<Resume.Role
					name="FdA Graphic Design"
					start="September 2010"
					end="June 2012"
				/>
				<Resume.Role
					name="ND Graphic Design"
					start="September 2008"
					end="June 2010"
				/>
			</Resume.Position>
		</Resume>
	</Layout>
)

export default ResumePage

import React from 'react'

import { Layout, Resume, SEO } from 'src/components'

const ResumePage = () => (
	<Layout>
		<SEO title="Joe McGrath Resume" />
		<Resume>
			<Resume.Position name="FanDuel" start="December 2017">
				<Resume.Description>
					<p>
						Senior UI engineer building a daily fantasy sports app
						which serves millions of users. Includes line
						management, partnering with stakeholders across the
						company, and working with multiple teams to drive
						innovation in the company's customer-facing web app.
					</p>
				</Resume.Description>
				<Resume.Role name="Senior Software Engineer" start="July 2018">
					<ul>
						<li>
							Led frontend development of the web app's new
							content discovery UI using ​React​, Redux​,
							​GraphQL​, and ​fela​. Involved from problem
							statement and design through to production and
							iteration. Demonstrated ​27% uplift in desired
							metrics​ (e.g. users entering contests relevant to
							their user group) via A/B testing, and laid
							groundwork for transformative product changes.
						</li>
						<li>
							Contributed both as part of an agile team and as a
							web platform lead, influencing the approach across
							teams via line management, mentorship, support for
							various projects, and exploration of new technology
							and approaches.
						</li>
						<li>
							Developed the company's first open-source library,
							​Refract​, and provided guidance to other developers
							learning ​reactive programming​.
						</li>
					</ul>
				</Resume.Role>
				<Resume.Role
					name="Software Engineer"
					start="December 2017"
					end="July 2018"
				>
					<ul>
						<li>
							Built UI for new consumer facing features,
							contributing to the company's double-digit YOY
							revenue growth.
						</li>
						<li>
							Investigated and implemented platform improvements
							within our ​React/Redux codebase, improving DX and
							making the app more maintainable and scalable.
						</li>
						<li>
							Collaborated in review and refinement of the
							frontend team's hiring process and onboarding
							approach.
						</li>
					</ul>
				</Resume.Role>
			</Resume.Position>
			<Resume.Contribution name="Refract">
				<Resume.Description>
					<p>
						Maintainer​ of ​Refract​, a library which combines
						​React​ with ​RxJS​ and other reactive programming
						libraries. Major contributions including the majority of
						the documentation, several major features, code review,
						and design and analysis ofdifferent options at each
						stage of development. Refract is similar in concept to
						​redux-observable​, but coupled to components (ideal for
						code-splitting and reuse), with an API designed for
						general-purpose use across multiple data sources and
						imperative side-effects.
					</p>
				</Resume.Description>
			</Resume.Contribution>
			<Resume.Position name="Brainnwave" start="October 2018">
				<Resume.Description>
					<p>
						Senior software engineer building a business
						intelligence and analysis platform. Part-time position
						alongside full-time job at FanDuel.
					</p>
				</Resume.Description>
				<Resume.Role
					name="Senior Software Engineer"
					start="October 2018"
				>
					<ul>
						<li>Rearchitecture of core of app</li>
						<li>Analytics</li>
					</ul>
				</Resume.Role>
			</Resume.Position>
			<Resume.Position name="Beezer" start="July 2018" end="June 2018">
				<Resume.Description>
					<p>
						Frontend Developer​ at a SaaS startup building an
						innovative PWA-creation platform aimed at non-technical
						users. Transitioned to part-time after joining FanDuel.
					</p>
				</Resume.Description>
				<Resume.Role
					name="Frontend Developer"
					start="July 2018"
					end="June 2018"
				>
					<ul>
						<li>
							Rewrote UI codebase from scratch in two months,
							projected to save over £5 million in direct costs
							alone.
						</li>
						<li>
							As part of the rewrite: ​reduced codebase size by
							more than 50%​ while reducing complexity, cutting
							development times for new features from weeks to
							hours, ​reducing bundle size by up to 90%​, adding
							many customer-facing features and user experience
							improvements, writing comprehensive documentation,
							onboarding other engineers to the new system, and
							much more.
						</li>
						<li>
							Prior to the above project, wrote two-pager
							explaining the flaws in the current system and
							outlining the ideal way forward. Sought and obtained
							buy-in from people at all levels of the company, by
							tailoring communication to both technical and
							non-technical people across various disciplines.
						</li>
						<li>
							Designed and implemented major features using
							​React​, ​Redux​, ​Firebase​, styled-components​,
							​webpack, Node.js, and more. Contributed to the
							business roadmap and management of workload, triaged
							and fixed bugs, etc.
						</li>
					</ul>
				</Resume.Role>
			</Resume.Position>
			<Resume.Position
				name="Untitled"
				start="October 2009"
				end="July 2017"
			>
				<Resume.Description>
					<p>
						Web developer at a WordPress agency, building dozens of
						sites for small to medium enterprises, including custom
						functionality built using JavaScript. Projects were
						primarily brochureware, plus occasional e-commerce
						sites, interactive knowledgebase systems, or similar.
					</p>
				</Resume.Description>
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
			</Resume.Position>
		</Resume>
	</Layout>
)

export default ResumePage

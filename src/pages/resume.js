import React from 'react'

import { Layout, Resume, SEO, WaveSection } from 'src/components'

const ResumePage = () => (
	<Layout>
		<SEO title="Joe McGrath Resume" />
		<Resume>
			<WaveSection>Testing!</WaveSection>
			<Resume.Position name="Webflow" branding="#4353ff" start="May 2019">
				<Resume.Role name="Senior Software Engineer" />
			</Resume.Position>
			<Resume.Position name="Refract" branding="#50B979">
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
				branding="#1493ff"
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
				branding="#e74d30"
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
				branding="#b0cf2f"
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
				name="Untitled"
				branding="#f18c00"
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
		</Resume>
	</Layout>
)

export default ResumePage

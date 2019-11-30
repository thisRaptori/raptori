import React from 'react'
import styled from 'styled-components'

import {
	Icon,
	Layout,
	Link,
	QueryImage,
	SEO,
	Small,
	WaveSection,
} from 'src/components'

const Projects = styled.div`
	section {
		padding: calc(2rem + 1vw) 0;

		> :first-child {
			margin-top: 0;
		}
	}
`

const ProjectsPage = () => (
	<Layout activePage="projects">
		<SEO title="Projects" />
		<WaveSection>
			<p>
				Here's a brief introduction to some of the projects I've built
				or made significant contributions to! More details about some of
				the most interesting parts of the projects coming soon...
			</p>
		</WaveSection>

		<Projects>
			<section>
				<h3>
					<QueryImage name="refract" width={300} />
				</h3>
				<p>
					Refract is a JavaScript library which makes makes reactive
					programming possible in apps using React, React Native,
					Preact, Inferno, or Redux.
				</p>
				<p>
					Reactive programming is a powerful programming paradigm
					which allows engineers to express complex asynchronous logic
					flows in a clear and declarative fashion. This can help
					reduce surface area for bugs, improve code reuse, simplify
					complex functionality, and make impossible functionality
					possible.
				</p>
				<p>
					Refract provides an API designed to expose the internals of
					a typical unidirectional data flow, and make it easy to
					separate logic from imperative side-effects. It takes care
					of the hard parts of connecting your reactive programming
					library to your app, so you can focus on writing your logic
					instead.
				</p>
				<Small>
					<Link
						to="/blog/how-we-harnessed-the-power-of-reactive-programming-with-refract"
						button
					>
						Find Out More
					</Link>
					&nbsp;
					<Link to="https://refract.js.org/" secondary button>
						Documentation
					</Link>
					&nbsp;
					<Link
						to="https://github.com/fanduel-oss/refract"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>

			<WaveSection as="section">
				<h3>
					<QueryImage
						name="harmony"
						style={{
							display: 'inline-block',
							marginRight: '10px',
							verticalAlign: 'middle',
							width: 64,
						}}
					/>{' '}
					Harmony
				</h3>
				<p>
					Harmony is a Chrome extension which simplifies the Discord
					interface and adds some useful features.
				</p>
				<p>
					Discord is a chat application (primarily aimed at gamers)
					which is used by some major subsections of the programming
					community. I'm an active member of several of these
					servers—most notably{' '}
					<Link to="https://www.reactiflux.com">Reactiflux</Link>—and
					as a result use Discord daily.
				</p>
				<p>
					The Discord interface has some bugs and slight annoyances
					which regularly get in the way, and some useful features
					which would be easy to implement are currently missing.
					Harmony has been a great way to explore how Chrome
					extensions are structured while solving these everyday
					problems!
				</p>
				<Small>
					<Link
						to="https://chrome.google.com/webstore/detail/harmony/jaaoemgmljmlgmpailnhdikgbpffhkkd"
						secondary
						button
					>
						Web Store
					</Link>
					&nbsp;
					<Link
						to="https://github.com/thisRaptori/harmony"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</WaveSection>

			<section>
				<h3>SaurusSims</h3>
				<p>
					My wife creates content for the Sims 4—custom clothes,
					hairs, objects, etc—and shares her creations with the game's
					community.
				</p>
				<p>
					The Sims 4 creator community is mostly active on Tumblr, so
					she primarily posts her content there. She wasn't happy with
					any of the existing Tumblr themes, so she asked me to create
					one for her.
				</p>
				<p>
					At first, I tried to avoid the awkward Tumblr theme template
					system by building a React app which consumed Tumblr's API.
					Unfortunately her blog is too popular, and her followers
					were regularly unable to access it due to rate limiting on
					the API!
				</p>
				<p>
					As a result, I started again and re-created the same design
					as a plain Tumblr theme. Some extra non-Tumblr functionality
					was rebuilt into vanilla JavaScript, fetching data directly
					from Contentful's API.
				</p>
				<Small>
					<Link to="https://saurussims.tumblr.com/" secondary button>
						Website
					</Link>
					&nbsp;
					<Link
						to="https://github.com/thisRaptori/saurussims"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>

			<WaveSection as="section">
				<h3>Midnight Sun</h3>
				<p>
					My wife and I worked together in our spare time over the
					course of a couple of years to build an online game, and
					managed the community which grew around it.
				</p>
				<p>
					The game was a text-and-graphics based RPG where users were
					given superpowers, and included a host of different features
					to keep them engaged. The core was a real-time multiplayer
					battle system, complete with non-player characters governed
					by a complex algorithm determining how they would interact
					with real users.
				</p>
				<p>
					Users were able to choose from 32 superpowers, ranging from
					simple (such as telekinesis, pyrokinesis, or superhuman
					strenth), through to complex (mind control, power
					absorption, time manipuation, and so on). These were all
					painstakingly balanced and fully realised, with a huge
					variety of capabilities and effects.
				</p>
				<p>
					The backend was written in PHP; the frontend was written as
					vanilla CSS/HTML with a custom DOM manipulation system built
					using jQuery to handle interactivity.
				</p>
			</WaveSection>

			<section>
				<h3>WPC Extended</h3>
				<p>
					A WordPress plugin which provides a simplified interface for
					adding to and updating the Customizer, bundled with several
					custom controls and shorthands to make life easier.
				</p>
				<p>
					As it's a WordPress plugin, this uses a mix of PHP, CSS, and
					jQuery to implement extra functionality on top of the
					WordPress platform. It makes theme customisation and
					development significantly faster by providing a simpler and
					more intuitive interface for adding advanced customisation
					options to the system.
				</p>
				<p>
					The plugin itself was designed to be extensible. For
					example, the{' '}
					<Link to="https://github.com/thisRaptori/wpc-extended-sass">
						Automated SASS Export
					</Link>{' '}
					plugin injects the customisation options into a SASS
					compiler and compiles the user's CSS on update, providing a
					much faster and more responsive developer experience.
				</p>
				<Small>
					<Link
						to="https://github.com/thisRaptori/wpc-extended"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>
		</Projects>
	</Layout>
)

export default ProjectsPage

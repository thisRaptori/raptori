import React from 'react'

import { Layout, Link, SEO } from 'src/components'

const IndexPage = () => (
	<Layout
		content={
			<>
				<SEO
					title="Home"
					keywords={[`gatsby`, `application`, `react`]}
				/>
				<h1>Hey, I'm Joe McGrath!</h1>
				<p>
					I'm a senior software engineer with a background in design,
					currently working at{' '}
					<Link to="https://www.fanduel.com">FanDuel</Link>. I build
					highly scaleable web apps, contribute to open source, and
					write fiction in my spare time!
				</p>
				<p>
					<Link to="/resume/" button>
						View Resume
					</Link>
				</p>
			</>
		}
	/>
)

export default IndexPage

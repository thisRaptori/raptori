import React from 'react'

import { Layout, Link, SEO } from 'src/components'

const SecondPage = () => (
	<Layout>
		<SEO title="Page two" />
		<h1>Hi from the second page</h1>
		<p>Welcome to page 2</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

export default SecondPage

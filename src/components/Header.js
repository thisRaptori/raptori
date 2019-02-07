import PropTypes from 'prop-types'
import React from 'react'

import { Icon, Link } from 'src/primitives'

const Header = ({ siteTitle }) => (
	<header>
		<h1>
			<Link to="/">{siteTitle}</Link>
			<Link to="https://github.com/jtmcgrath">
				<Icon name="GitHub" />
			</Link>
			<Link to="https://www.linkedin.com/in/joetmcgrath/">
				<Icon name="LinkedIn" />
			</Link>
		</h1>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header

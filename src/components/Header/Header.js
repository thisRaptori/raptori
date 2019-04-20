import PropTypes from 'prop-types'
import React from 'react'

import { Icon, Link, ThemeToggle } from 'src/components'
import { HeaderElement, Space } from './styles'
import SubNav from './SubNav'

const Header = ({ footerIsVisible, siteTitle }) => (
	<HeaderElement className="background transition primary-links">
		<nav>
			<Link to="/" className="site-title">
				{siteTitle}
			</Link>
			<Space />
			<SubNav footerIsVisible={footerIsVisible}>
				<Link to="/blog/">
					<Icon name="Speech" />
				</Link>
				<Link to="/resume/">
					<Icon name="Info" />
				</Link>
				<Link to="https://github.com/jtmcgrath">
					<Icon name="GitHub" />
				</Link>
				<Link to="https://twitter.com/thisRaptori">
					<Icon name="Twitter" />
				</Link>
				<Link to="https://www.linkedin.com/in/joetmcgrath/">
					<Icon name="LinkedIn" />
				</Link>
			</SubNav>
			<ThemeToggle />
		</nav>
	</HeaderElement>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header

import PropTypes from 'prop-types'
import React from 'react'

import { Icon, Link, ThemeToggle } from 'src/components'
import { github, twitter, linkedin } from 'src/links'
import { HeaderElement, Space } from './styles'
import SubNav from './SubNav'

const Header = ({ footerIsVisible, siteTitle }) => (
	<HeaderElement className="background transition primary-links">
		<nav>
			<Link to="/" className="site-title">
				<Icon name="Icon" fill={null} />
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
				<Link to={github}>
					<Icon name="GitHub" />
				</Link>
				<Link to={twitter}>
					<Icon name="Twitter" />
				</Link>
				<Link to={linkedin}>
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

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
				<Link to="/blog">
					<Icon name="Speech" aria-label="Blog" />
				</Link>
				<Link to="/projects">
					<Icon name="Rocket" aria-label="Projects" />
				</Link>
				<Link to="/resume">
					<Icon name="Info" aria-label="Resume" />
				</Link>
				<Link to={github}>
					<Icon name="GitHub" aria-label="GitHub" />
				</Link>
				<Link to={twitter}>
					<Icon name="Twitter" aria-label="Twitter" />
				</Link>
				<Link to={linkedin}>
					<Icon name="LinkedIn" aria-label="LinkedIn" />
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

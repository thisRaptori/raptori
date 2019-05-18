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
					<Icon name="Speech" />
					<span>Blog</span>
				</Link>
				<Link to="/projects">
					<Icon name="Rocket" />
					<span>Projects</span>
				</Link>
				<Link to="/resume">
					<Icon name="Info" />
					<span>Resume</span>
				</Link>
				<Link to={github}>
					<Icon name="GitHub" />
					<span>GitHub</span>
				</Link>
				<Link to={twitter}>
					<Icon name="Twitter" />
					<span>Twitter</span>
				</Link>
				<Link to={linkedin}>
					<Icon name="LinkedIn" />
					<span>LinkedIn</span>
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

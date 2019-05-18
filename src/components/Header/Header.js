import PropTypes from 'prop-types'
import React from 'react'

import { Icon, Link, ThemeToggle } from 'src/components'
import { github, twitter, linkedin } from 'src/links'
import { HeaderElement, NavLink, Space } from './styles'
import SubNav from './SubNav'

const Header = ({ activePage, footerIsVisible, siteTitle }) => (
	<HeaderElement className="background transition primary-links">
		<nav>
			<Link to="/" className="site-title">
				<Icon name="Icon" fill={null} />
				{siteTitle}
			</Link>
			<Space />
			<SubNav footerIsVisible={footerIsVisible}>
				<NavLink active={activePage === 'blog'} to="/blog">
					<Icon name="Speech" />
					<span>Blog</span>
				</NavLink>
				<NavLink active={activePage === 'projects'} to="/projects">
					<Icon name="Rocket" />
					<span>Projects</span>
				</NavLink>
				<NavLink active={activePage === 'resume'} to="/resume">
					<Icon name="Info" />
					<span>Resume</span>
				</NavLink>
				<NavLink to={github}>
					<Icon name="GitHub" />
					<span>GitHub</span>
				</NavLink>
				<NavLink to={twitter}>
					<Icon name="Twitter" />
					<span>Twitter</span>
				</NavLink>
				<NavLink to={linkedin}>
					<Icon name="LinkedIn" />
					<span>LinkedIn</span>
				</NavLink>
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

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Icon, Link, ThemeToggle } from 'src/components'

const HeaderElement = styled.header`
	border-top: 2px solid var(--primary);
	left: 0;
	line-height: var(--header-height);
	position: fixed;
	right: 0;
	top: 0;
	z-index: 2;

	nav {
		line-height: inherit;
		display: flex;

		> * {
			align-items: center;
			display: flex;
			padding: 6px;
		}
	}

	.site-title {
		color: var(--primary);
		font-size: 22px;
		text-decoration: none;
	}
`

const Space = styled.span`
	flex-grow: 1;
`

const Header = ({ siteTitle }) => (
	<HeaderElement className="background transition primary-links">
		<nav>
			<Link to="/" className="site-title">
				{siteTitle}
			</Link>
			<Space />
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

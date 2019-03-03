import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Icon, Link, ThemeToggle } from 'src/components'

const HeaderElement = styled.header`
	background: var(--background);
	border-top: 2px solid var(--primary);
	left: 0;
	line-height: var(--header-height);
	position: fixed;
	right: 0;
	top: 0;
	z-index: 2;

	h1 {
		line-height: inherit;
	}
`

const Header = ({ siteTitle }) => (
	<HeaderElement className="site-header">
		<h1>
			<Link to="/">{siteTitle}</Link>
			<Link to="https://github.com/jtmcgrath">
				<Icon name="GitHub" />
			</Link>
			<Link to="https://www.linkedin.com/in/joetmcgrath/">
				<Icon name="LinkedIn" />
			</Link>
			<ThemeToggle />
		</h1>
	</HeaderElement>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header

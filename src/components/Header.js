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

	h1 {
		display: flex;
		line-height: inherit;

		> * {
			padding: 6px;
		}
	}

	.site-title {
		color: var(--primary);
		flex-grow: 1;
		font-size: 22px;
		text-decoration: none;
	}
`

const Header = ({ siteTitle }) => (
	<HeaderElement className="background">
		<h1>
			<Link to="/" className="site-title">
				{siteTitle}
			</Link>
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

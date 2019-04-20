import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Icon, Link, ThemeToggle } from 'src/components'
import { useIsMobile } from 'src/hooks'

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
			padding: var(--header-padding);
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
	padding: 0 !important;
`

const MobileNav = styled.div`
	bottom: 0;
	display: flex;
	justify-content: space-around;
	left: 0;
	padding: 0 !important;
	position: fixed;
	right: 0;

	> * {
		align-items: center;
		display: flex;
		padding: var(--header-padding);
	}

	${props =>
		props.footerIsVisible &&
		`
		background: var(--primary) !important;

		* {
			color: var(--dark);
		}
	`}
`

const SubNav = ({ children, footerIsVisible }) => {
	const isMobile = useIsMobile()

	return isMobile ? (
		<MobileNav
			className="background transition"
			footerIsVisible={footerIsVisible}
		>
			{children}
		</MobileNav>
	) : (
		children
	)
}

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

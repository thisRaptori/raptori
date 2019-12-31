import styled from 'styled-components'

import Link from '../Link'

export const HeaderElement = styled.header`
	border-top: 2px solid var(--primary);
	left: 0;
	line-height: var(--header-height);
	position: fixed;
	right: 0;
	top: 0;
	z-index: 3;

	:before {
		background: var(--primary);
		bottom: 100%;
		content: '';
		height: 100vh;
		left: 0;
		position: fixed;
		right: 0;
		z-index: -1;
	}

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

		svg {
			border: 1px solid var(--primary);
			border-radius: 50%;
			fill: var(--primary);
			margin-right: 1rem;
		}
	}

	@media (max-width: 440px) {
		a[href*='linkedin'] {
			display: none;
		}
	}
`

export const NavLink = styled(Link)`
	flex-direction: column;
	justify-content: center;
	padding: 0 !important;
	position: relative;
	text-decoration: none;
	width: calc(3 * var(--header-padding));

	${props => (props.active ? 'color: var(--secondary) !important;' : '')}

	span {
		font-size: 13px;
		line-height: 1;
		padding-top: calc(var(--header-padding) / 4);
	}
`

export const Space = styled.span`
	flex-grow: 1;
	padding: 0 !important;

	a & {
		min-width: 1rem;
	}
`

export const MobileNav = styled.div`
	bottom: 0;
	box-sizing: content-box;
	display: flex;
	height: calc(24px + var(--header-padding) + var(--header-padding));
	justify-content: space-around;
	left: 0;
	padding: 0 0 env(safe-area-inset-bottom) 0 !important;
	position: fixed;
	right: 0;

	> * {
		align-items: center;
		display: flex;
		height: 100%;
		padding: var(--header-padding);
	}

	${props =>
		props.footerIsVisible &&
		`
		background: var(--source) !important;
		--primary: var(--dark);
		--secondary: var(--secondary-dark);
	`}
`

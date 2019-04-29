import styled from 'styled-components'

export const HeaderElement = styled.header`
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

		svg {
			border: 1px solid var(--primary);
			border-radius: 50%;
			fill: var(--primary);
			margin-right: 1rem;
		}
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

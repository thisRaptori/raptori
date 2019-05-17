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

		a:not(.site-title) {
			flex-direction: column;
			padding: 0;
			position: relative;
			text-decoration: none;
			justify-content: center;
			width: calc(3 * var(--header-padding));

			span {
				line-height: 1;
				font-size: 12px;
				padding-top: calc(var(--header-padding) / 4);
			}
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
	padding: 0 0 env(safe-area-inset-left) 0 !important;
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

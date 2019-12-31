import styled from 'styled-components'

import { getSectionWidth } from 'src/utils'

export const Main = styled.main`
	margin: 0 auto;
	max-width: 680px;
	padding: 2rem;
	position: relative;
	z-index: 1;
`

export const Footer = styled(Main)`
	position: relative;

	&:after {
		background: var(--primary);
		content: '';
		display: block;
		height: 100vh;
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translateX(-50%);
		width: ${getSectionWidth};
		z-index: -1;
	}
`

export const Below = styled.div`
	color: var(--dark);
	margin: 0 auto;
	max-width: 680px;
	padding: 2rem;
`

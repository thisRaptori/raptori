import React from 'react'
import styled from 'styled-components'

import { Waves } from 'src/components'
import { useWindowWidth } from 'src/hooks'
import { fullWidth, getSectionWidth } from 'src/utils'

const Wrapper = styled.div`
	${props => (props.disableTopMargin ? 'margin-top: -2rem;' : '')}
	main > &:first-child {
		margin-top: -2rem;
	}

	& ~ * {
		position: relative;
		z-index: 2;
	}

	& ~ & {
		z-index: 1;
	}

	@media (max-width: 699px) {
		${props => (props.footer ? '' : 'margin-left: -2rem;')}
		max-width: 100vw;
		overflow: hidden;
		padding: 0 2rem;
		width: ${getSectionWidth};
	}
`

const Section = styled.div`
	color: var(--dark);
	margin: 0 -2rem;
	padding: 0 !important;

	@media (min-width: 700px) {
		& {
			margin: 0;
			overflow: hidden;
			width: ${getSectionWidth};
			${props =>
				props.footer
					? 'width: 100%;'
					: `transform: ${fullWidth(props)};`}
		}
	}
`

const Background = styled.div`
	background: var(--primary);
`

const Content = styled.div`
	margin: 0 2rem;
	max-width: 640px;
	padding: calc(2rem + 1vw) 0;
	position: relative;
	z-index: 2;

	@media (min-width: 680px) {
		& {
			margin: 0 auto;
		}
	}

	> :first-child,
	> * > :first-child {
		margin-top: 0;
	}

	a {
		--background: var(--source);
		--primary: var(--dark);
		--secondary: var(--secondary-dark);

		&:link,
		&:visited {
			color: var(--primary);
		}

		&:link:hover,
		&:visited:hover {
			color: var(--secondary);
		}
	}
`

const WaveSection = ({ as, children, disableTopMargin, footer }) => {
	const width = useWindowWidth()

	return (
		<Wrapper
			disableTopMargin={disableTopMargin}
			footer={footer}
			width={width}
		>
			<Section width={width} as={as} footer={footer}>
				<Waves />
				<Background>
					<Content>{children}</Content>
				</Background>
				{footer ? null : <Waves invert offset />}
			</Section>
		</Wrapper>
	)
}

export default WaveSection

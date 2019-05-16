import React from 'react'
import styled from 'styled-components'

import { Waves } from 'src/components'
import { useWindowWidth } from 'src/hooks'

const getSectionWidth = props => (props.width ? `${props.width}px` : '100vw')

const Skew = styled.div`
	transform: skew(0, var(--skew));
	position: relative;
	z-index: ${props => (props.increaseZIndex ? 2 : -1)};
`

const Section = styled.div`
	background: var(--primary);
	color: var(--dark);

	${props => `
        margin: 0 -2rem;

        @media (min-width: 700px) {
            & {
                margin: 0;
                transform: translateX(calc((640px - ${getSectionWidth(
					props
				)}) / 2));
                width: ${getSectionWidth(props)};
            }
        }
		`}

	main &:first-child {
		margin-top: -6rem;
	}
`

const Content = styled.div`
	margin: 0 2rem;
	max-width: 640px;
	position: relative;
	transform: skew(0, calc(0deg - var(--skew)));
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

const WaveSection = ({ as, children, topOnly }) => {
	const width = useWindowWidth()

	return (
		<Skew increaseZIndex={topOnly}>
			<Section width={width} as={as}>
				<Waves />
				<Content>{children}</Content>
				{topOnly ? null : <Waves invert offset />}
			</Section>
		</Skew>
	)
}

export default WaveSection

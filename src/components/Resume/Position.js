import React from 'react'
import styled from 'styled-components'

import { Icon, Link } from 'src/components'

const Section = styled.section`
	margin-bottom: 2rem;
	margin-top: calc(6rem + 1vw);

	& > & {
		margin-top: 2rem;
	}
`

const Header = styled.header`
	align-items: flex-end;
	display: flex;
	justify-content: space-between;
	line-height: 1;
	margin-bottom: 2rem;

	svg {
		height: 1em;
		vertical-align: middle;
	}

	${props => (props.branding ? `color: ${props.branding};` : '')}

	a {
		color: inherit !important;
		text-decoration: none;
	}

	h3 {
		line-height: 1.2;
	}

	h4 {
		line-height: 1.3;
	}

	@media (min-width: 800px) {
		h3 {
			line-height: 1;
		}

		h4 {
			line-height: 1.2;
		}
	}

	> p {
		font-size: 1.6rem;
		font-weight: 100;
		line-height: 1.4;
		margin-left: 0.4rem;
		text-align: right;
		white-space: nowrap;

		@media (max-width: 1000px) {
			font-size: calc(1.4rem + 0.2vw);
		}
	}
`

const createComponent = (title, root) => {
	const Component = ({
		branding,
		children,
		end,
		link,
		name,
		start,
		subtext,
	}) => {
		const titleContent = React.createElement(title, {
			children: (
				<>
					{name}&nbsp;
					{link ? <Icon name="External" size={12} /> : null}
				</>
			),
		})

		return (
			<Section as={root}>
				<Header branding={branding}>
					{link ? (
						<Link to={link}>{titleContent}</Link>
					) : (
						titleContent
					)}
					{start ? (
						<p>
							{start} - {end}
						</p>
					) : subtext ? (
						<p>{subtext}</p>
					) : null}
				</Header>
				{children}
			</Section>
		)
	}

	Component.defaultProps = {
		end: 'present',
	}

	return Component
}

export const Contribution = createComponent('h3')
export const Position = createComponent('h3')
export const Role = createComponent('h4', 'article')

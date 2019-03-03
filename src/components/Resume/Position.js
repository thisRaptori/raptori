import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
	margin-bottom: 2rem;

	& + & {
		margin-top: 6rem;
	}

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

	${props => (props.branding ? `color: ${props.branding};` : '')}

	> h3 {
		margin-right: 1rem;
	}

	> p {
		font-size: 1.6rem;
		font-weight: 100;
		margin-bottom: 0.4rem;
	}
`

const createComponent = (title, root) => {
	const Component = ({ branding, children, end, name, start }) => (
		<Section as={root}>
			<Header branding={branding}>
				{React.createElement(title, { children: name })}
				{start ? (
					<p>
						{start} - {end}
					</p>
				) : null}
			</Header>
			{children}
		</Section>
	)

	Component.defaultProps = {
		end: 'present',
	}

	return Component
}

export const Contribution = createComponent('h3')
export const Position = createComponent('h3')
export const Role = createComponent('h4', 'article')

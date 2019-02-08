import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
	margin-bottom: 20px;
`

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`

const createComponent = (title, root) => {
	const Component = ({ children, end, name, start }) => (
		<Section as={root}>
			<Header>
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

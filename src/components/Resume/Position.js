import React from 'react'

const createComponent = (header, root = 'section') => {
	const Component = ({ children, end, name, start }) =>
		React.createElement(
			root,
			null,
			<>
				<header>
					{React.createElement(header, null, name)}
					{start ? (
						<p>
							{start} - {end}
						</p>
					) : null}
				</header>
				{children}
			</>
		)

	Component.defaultProps = {
		end: 'present',
	}

	return Component
}

export const Contribution = createComponent('h3')
export const Position = createComponent('h3')
export const Role = createComponent('h4', 'article')

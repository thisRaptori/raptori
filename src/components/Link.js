import React from 'react'
import { Link as InternalLink } from 'gatsby'

const Link = ({ children, newTab, to, ...props }) =>
	to.startsWith('/') ? (
		<InternalLink to={to} {...props}>
			{children}
		</InternalLink>
	) : (
		<a
			href={to}
			target={newTab ? '_blank' : null}
			rel={newTab ? 'noopener noreferrer' : null}
			{...props}
		>
			{children}
		</a>
	)

Link.defaultProps = {
	newTab: true,
}

export default Link

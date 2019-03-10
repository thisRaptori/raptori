import React from 'react'
import styled from 'styled-components'
import { Link as InternalLink } from 'gatsby'

const StyledLink = styled.a`
	${props =>
		props.button
			? `
	background: var(--primary);
	border-radius: 4px;
	color: var(--background) !important;
	display: inline-block;
	padding: 4px 12px;
	text-decoration: none;

	&:hover {
		background: var(--secondary);
	}
	`
			: null}
`

const StyledInternalLink = StyledLink.withComponent(InternalLink)

const Link = ({ children, newTab, to, ...props }) =>
	to.startsWith('/') ? (
		<StyledInternalLink to={to} {...props}>
			{children}
		</StyledInternalLink>
	) : (
		<StyledLink
			href={to}
			target={newTab ? '_blank' : null}
			rel={newTab ? 'noopener noreferrer' : null}
			{...props}
		>
			{children}
		</StyledLink>
	)

Link.defaultProps = {
	newTab: true,
}

export default Link

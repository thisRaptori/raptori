import React from 'react'
import styled from 'styled-components'
import { Link as InternalLink } from 'gatsby'

const getButtonStyles = props => {
	const colour = props.secondary ? 'var(--primary)' : 'var(--background)'
	const yPadding = props.secondary ? 0 : 2

	const mainStyles = props.secondary
		? 'border: 2px solid var(--primary);'
		: 'background: var(--primary);'

	const hoverStyles = props.secondary
		? `&:hover {
		border-color: var(--secondary);
		color: var(--background) !important;
	}`
		: ``

	return `
	border-radius: 4px;
	color: ${colour} !important;
	display: inline-block;
	line-height: 34px;
	margin: 2px 0 !important;
	padding: ${yPadding}px 12px;
	text-decoration: none;
	${mainStyles}

	&:hover {
		background: var(--secondary);
		${hoverStyles}
	}

	svg {
		margin: -1px 4px 1px -4px;
		vertical-align: middle;
	}
	`
}

const StyledLink = styled.a(props =>
	props.button ? getButtonStyles(props) : null
)

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

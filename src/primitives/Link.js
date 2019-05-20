import React from 'react'
import styled from 'styled-components'
import { Link as InternalLink } from 'gatsby'

const svgPosition = margin => `
	svg {
		margin: ${margin};
		vertical-align: middle;
	}`

const getButtonStyles = props => {
	const colour =
		props.colour ||
		(props.secondary ? 'var(--primary)' : 'var(--background)')
	const opacity = props.disabled ? 'opacity: 0.6;' : ''
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
	cursor: pointer;
	display: inline-block;
	font-size: inherit;
	line-height: 34px;
	margin: ${props.margin || '2px'} 0 !important;
	padding: ${yPadding}px 12px;
	text-decoration: none;
	${opacity}
	${mainStyles}

	&:hover,
	&:focus {
		background: var(--secondary);
		${hoverStyles}
	}

	${svgPosition('-1px 4px 1px -4px')}
	`
}

const getLinkStyles = props => {
	const textDecoration = props.disableUnderline
		? 'text-decoration: none;'
		: ''

	return `
		${textDecoration}
		${svgPosition('-2px 0 2px 0')}
	`
}

export const StyledLink = styled.a(props =>
	props.button ? getButtonStyles(props) : getLinkStyles(props)
)

const StyledInternalLink = StyledLink.withComponent(InternalLink)

const Link = ({ children, external, newTab, to, ...props }) =>
	!external && to.startsWith('/') ? (
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

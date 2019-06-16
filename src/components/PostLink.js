import React from 'react'
import styled from 'styled-components'

import { Link, MetaText } from 'src/components'

const StyledLink = styled(Link)`
	color: var(${props => (props.inFooter ? '--dark' : '--text')}) !important;
	display: block;
	margin: 1rem -1rem -1rem;
	padding: 1rem;
	text-decoration: none;

	${props =>
		!props.inFooter
			? `
		box-shadow:
			0 0.5rem 1rem rgba(25, 33, 41, 0.3),
			0 0 1rem rgba(25, 33, 41, 0.4);
		border-radius: .5rem;
		background: var(--background);
		transition: all ease 0.1s;

		&:hover {
			box-shadow:
				0 1rem 2rem rgba(25,33,41,0.3),
				0 0 1rem rgba(25, 33, 41, 0.4);
			transform: translate(0, -.2rem) scale(1.02);
		}
	`
			: ''}

	${props => (props.featured ? 'grid-column-end: span 2;' : '')}

	& + & {
		margin-top: calc(4rem + 1vw);
	}

	> * {
		margin: 0;
	}

	> ${MetaText} {
		margin-top: 1rem;
	}
`

const PostLink = ({
	featured,
	post: {
		fields: { readingTime },
		frontmatter: { date, path, subtitle, tags, title },
	},
	inFooter,
}) => (
	<StyledLink
		featured={featured || (tags || []).includes('featured')}
		inFooter={inFooter}
		to={path}
	>
		<h4>{title}</h4>
		<MetaText italic>
			{date} • {readingTime.text}
		</MetaText>
		{subtitle ? <MetaText>{subtitle}</MetaText> : null}
	</StyledLink>
)

export default PostLink

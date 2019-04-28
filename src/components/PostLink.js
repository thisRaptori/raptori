import React from 'react'
import styled from 'styled-components'
import { Link } from 'src/components'

const StyledLink = styled(Link)`
	${props => props.inFooter && 'color: var(--dark) !important;'}
	display: block;
	margin: 1rem -1rem -1rem;
	padding: 1rem;
	text-decoration: none;

	> h6 {
		font-weight: 400;
	}

	> * {
		margin: 0;
	}
`

const PostLink = ({
	post: {
		fields: { readingTime },
		frontmatter: { date, path, subtitle, title },
	},
	inFooter,
}) => (
	<StyledLink to={path} inFooter={inFooter}>
		<h6>{title}</h6>
		<p>
			{date} • {readingTime.text}
		</p>
		{subtitle ? <p>{subtitle}</p> : null}
	</StyledLink>
)

export default PostLink

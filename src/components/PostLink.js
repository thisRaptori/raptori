import React from 'react'
import styled from 'styled-components'

import { Image, Link, MetaText } from 'src/components'

const StyledLink = styled(Link)`
	color: var(${props => (props.inFooter ? '--dark' : '--text')}) !important;
	display: block;
	margin: 1rem -1rem -1rem;
	overflow: hidden;
	padding: 1rem;
	position: relative;
	text-decoration: none;

	${props =>
		!props.inFooter
			? `
		box-shadow:
			0 0.5rem 1rem var(--shadow),
			0 0 1rem var(--shadow);
		border-radius: .5rem;
		background: var(--background);
		transition: all ease 0.1s;

		&:hover {
			box-shadow:
				0 1rem 2rem var(--shadow),
				0 0 1rem var(--shadow);
			transform: translate(0, -.2rem) scale(1.02);
		}
	`
			: ''}

	.gatsby-image-wrapper {
		background: var(--text);
	}

	${props =>
		props.featured
			? `
		grid-column-end: span 2;
		padding: 2rem 1.5rem 2rem calc(50% + 5rem);

		.gatsby-image-wrapper {
			bottom: 0;
			left: 0;
			margin-right: -2rem;
			position: absolute !important;
			right: 50%;
			top: 0;
		}
	`
			: `
		.gatsby-image-wrapper {
			height: 160px;
			margin: -1rem -1rem 1rem -1rem;
		}
		`}

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
		frontmatter: { date, featuredImage, path, subtitle, tags, title },
	},
	inFooter,
}) => (
	<StyledLink
		featured={featured || (tags || []).includes('featured')}
		inFooter={inFooter}
		to={path}
	>
		<Image image={featuredImage} />
		<h4>{title}</h4>
		<MetaText italic>
			{date} • {readingTime.text}
		</MetaText>
		{subtitle ? <MetaText>{subtitle}</MetaText> : null}
	</StyledLink>
)

export default PostLink

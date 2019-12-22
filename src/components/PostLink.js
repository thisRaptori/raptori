import React from 'react'
import styled from 'styled-components'

import { Image, Link, MetaText } from 'src/components'

const StyledLink = styled(Link)`
	color: var(${props => (props.inFooter ? '--dark' : '--text')}) !important;
	display: flex;
	flex-direction: column;
	margin: 10rem -10rem -10rem;
	overflow: hidden;
	padding: 10rem;
	position: relative;
	text-decoration: none;

	> :last-child {
		align-items: flex-end;
		display: flex;
		flex: 1 1 100%;
	}

	${props =>
		!props.inFooter
			? `
		box-shadow:
			0 5rem 10rem var(--shadow),
			0 0 10rem var(--shadow);
		border-radius: 5rem;

		&:hover {
			box-shadow:
				0 10rem 20rem var(--shadow),
				0 0 10rem var(--shadow);
			transform: translate(0, -2rem) scale(1.02);
		}
	`
			: ''}

	.gatsby-image-wrapper {
		background: var(--text);
		flex: 0 0 160px;
		margin: -10rem -10rem 10rem -10rem;
	}

	@media (min-width: 600px) {
		${props =>
			props.featured
				? `
			grid-column-end: span 2;
			min-height: 230px;
			padding: 20rem 15rem 20rem calc(50% + 50rem);

			.gatsby-image-wrapper {
				bottom: 0;
				left: 0;
				margin: 0 -20rem 0 0;
				position: absolute !important;
				right: 50%;
				top: 0;
			}`
				: ''}
	}
	& + & {
		margin-top: calc(40rem + 1vw);
	}

	> * {
		margin: 0;
	}

	> ${MetaText} {
		margin-top: 10rem;
	}

	hr {
		border: none;
		margin-top: 20rem;
	}

	h4 {
		line-height: 1.3;
	}

	p {
		line-height: 1.5;
		margin-top: 20rem;
	}
`

const PostLink = ({
	featured,
	post: {
		fields: { readingTime },
		frontmatter: { featuredImage, path, subtitle, tags, title },
	},
	inFooter,
}) => (
	<StyledLink
		className="background transition"
		featured={featured || (tags || []).includes('featured')}
		inFooter={inFooter}
		to={path}
	>
		<Image className="transition" image={featuredImage} />
		<h4>{title}</h4>
		{subtitle ? <p>{subtitle}</p> : null}
		<hr />
		<MetaText italic>{readingTime.text}</MetaText>
	</StyledLink>
)

export default PostLink

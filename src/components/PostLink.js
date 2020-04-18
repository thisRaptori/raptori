import React from 'react'
import styled from 'styled-components'

import { Image, Link, MetaText } from 'src/components'

const wide = `
grid-column-end: span 2;
min-height: 230px;
padding: 1.5rem 1.5rem 1rem calc(50% + 4.5rem);

.gatsby-image-wrapper {
	bottom: 0;
	left: 0;
	margin: 0 -2rem 0 0;
	position: absolute !important;
	right: 50%;
	top: 0;
}`

const StyledLink = styled(Link)`
	color: var(${props => (props.inFooter ? '--dark' : '--text')}) !important;
	display: flex;
	flex-direction: column;
	margin: 1rem -1rem -1rem;
	overflow: hidden;
	padding: 1rem;
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
			0 .5rem 1rem var(--shadow),
			0 0 1rem var(--shadow);
		border-radius: .5rem;

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
		flex: 0 0 160px;
		margin: -1rem -1rem 1rem -1rem;
	}

	@media (min-width: 600px) {
		${props =>
		props.featured
			? wide
			: ''}

		@media (max-width: 1199px) {
			&:first-child {
				${wide}
			}
		}
	}
	& + & {
		margin-top: calc(4rem + 1vw);
	}

	> * {
		margin: 0;
	}

	> ${MetaText} {
		margin-top: 1rem;
	}

	hr {
		border: none;
		margin-top: 2rem;
	}

	h4 {
		line-height: 1.3;
	}

	p {
		line-height: 1.5;
		margin-top: 2rem;
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
			featured={
				typeof featured === 'undefined'
					? (tags || []).includes('featured')
					: featured
			}
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

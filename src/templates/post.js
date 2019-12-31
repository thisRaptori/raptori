import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import {
	MDXContent,
	Hr,
	Icon,
	Layout,
	Link,
	MetaText,
	NewsletterSignup,
	SEO,
	WaveSection,
} from 'src/components'
import { get } from 'src/utils'

const PostHeader = styled.header`
	h1 {
		margin-top: 0;
	}

	${MetaText} a {
		color: inherit;
	}

	${MetaText} a:hover,
	${MetaText} a:focus {
		color: var(--text);
	}

	@media (min-width: 1110px) {
		position: relative;

		& + hr {
			display: none;
		}

		${MetaText} {
			border-right: 1px solid;
			font-size: 0;
			margin: 3rem 2rem 0 0;
			padding-right: 2rem;
			position: absolute;
			right: 100%;
			text-align: right;
			top: 100%;
			width: 210px;
		}

		${MetaText} span {
			display: block;
			font-size: 1.6rem;
		}

		${MetaText} span:not(:last-child) {
			margin-bottom: 2rem;
		}
	}
`

const NextPrevLinks = styled.p`
	display: flex;
	justify-content: space-between;

	> * {
		align-items: center;
		display: flex;
		flex: 0 1 50%;
		justify-content: center;
		line-height: 1;
		padding: 1rem 12px;
		text-align: center;
	}

	> :not(:first-child) {
		margin-left: 2rem !important;
	}

	.text {
		flex: 1 1 100%;
	}
`

const Links = ({ links }) => (
	<>
		Also published at&nbsp;
		{links.reduce((components, [source, url], i) => {
			if (i > 0) {
				let separator = ', '
				if (i === links.length - 1) {
					if (i === 1) {
						separator = ' and '
					} else {
						separator = ', and '
					}
				}
				components.push(separator)
			}
			components.push(
				<Link key={url} to={url}>
					{source}
				</Link>
			)
			return components
		}, [])}
		.
	</>
)

export default function Template({
	data: {
		mdx: {
			fields: { readingTime },
			frontmatter: {
				date,
				featuredImage,
				link,
				published,
				repo,
				subtitle,
				title,
			},
			body,
		},
		site: {
			siteMetadata: { url: siteUrl },
		},
	},
	pageContext: { next, previous },
}) {
	const imagePath = get(featuredImage, 'childImageSharp', 'fluid', 'src')
	const image = imagePath && `${siteUrl}${imagePath}`
	const isArchived = subtitle.startsWith('Archive')

	const mainLinks =
		published && published.length ? (
			<>
				&nbsp;•&nbsp;
				<span>
					<Links links={published} />
				</span>
			</>
		) : null

	const extraLinks =
		link || repo ? (
			<>
				&nbsp;•&nbsp;
				<span>
					{link ? (
						<Link to={link} disableUnderline>
							Open&nbsp;
							<Icon name="External" size={8} />
						</Link>
					) : null}
					{link && repo ? <>&nbsp;•&nbsp;</> : null}
					{repo ? (
						<Link to={repo} disableUnderline>
							Code&nbsp;
							<Icon name="GitHub" size={16} />
						</Link>
					) : null}
				</span>
			</>
		) : null

	return (
		<Layout
			activePage="blog"
			children={
				<>
					<SEO description={subtitle} title={title} image={image} />
					<PostHeader isArchived={isArchived}>
						{isArchived ? (
							<WaveSection disableTopMargin>
								<p>
									<strong>From the archives.</strong> This
									post is one of several brief overviews of
									projects I've designed or built in the past
									which I'm including in my new site. Bear in
									mind that both the work and the write-up in
									these are up to a decade old now!
								</p>
							</WaveSection>
						) : null}
						<h1>{title}</h1>
						<MetaText as="h6" italic>
							<span>{date}</span> •{' '}
							<span>{readingTime.text}</span>
							{mainLinks}
							{extraLinks}
						</MetaText>
					</PostHeader>
					<Hr />
					<MDXContent>{body}</MDXContent>
					<Hr margin={6} />
					<NextPrevLinks>
						{next ? (
							<Link to={next.path} secondary button>
								<span>←</span>&nbsp;
								<span className="text">{next.title}</span>
							</Link>
						) : (
							<span />
						)}
						{previous ? (
							<Link to={previous.path} secondary button>
								<span className="text">{previous.title}</span>
								&nbsp;
								<span>→</span>
							</Link>
						) : (
							<span />
						)}
					</NextPrevLinks>
				</>
			}
			belowTheWaves={<NewsletterSignup />}
		/>
	)
}

export const pageQuery = graphql`
	query($path: String!) {
		site {
			siteMetadata {
				url
			}
		}
		mdx(frontmatter: { path: { eq: $path } }) {
			body
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				link
				path
				published
				repo
				subtitle
				title
				featuredImage {
					childImageSharp {
						fluid {
							src
						}
					}
				}
			}
			fields {
				readingTime {
					text
				}
			}
		}
	}
`

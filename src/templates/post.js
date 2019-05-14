import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { Icon, Layout, Link, MetaText, SEO, WaveSection } from 'src/components'

const Content = styled.div`
	&:not(:first-of-type) *:first-child {
		margin-top: 0;
	}
`

const PostHeader = styled.header`
	h1 {
		margin-top: 0;
	}

	${MetaText} {
		color: var(--primary);
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

	${props => (props.isArchived ? 'h1 { margin-top: 0 }' : '')}
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
		markdownRemark: {
			fields: { readingTime },
			frontmatter: { date, link, published, repo, subtitle, title },
			html,
		},
	},
}) {
	const isArchived = subtitle.startsWith('Archive')
	const content = html.split('<waves>').map((chunk, i) =>
		i % 2 ? (
			<WaveSection key={i}>
				<Content
					dangerouslySetInnerHTML={{
						__html: chunk,
					}}
				/>
			</WaveSection>
		) : (
			<Content
				key={i}
				dangerouslySetInnerHTML={{
					__html: chunk,
				}}
			/>
		)
	)

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
							<Icon name="External" width={8} height={8} />
						</Link>
					) : null}
					{link && repo ? <>&nbsp;•&nbsp;</> : null}
					{repo ? (
						<Link to={repo} disableUnderline>
							Code&nbsp;
							<Icon name="GitHub" width={16} height={16} />
						</Link>
					) : null}
				</span>
			</>
		) : null

	return (
		<Layout>
			<SEO title={title} />
			<PostHeader isArchived={isArchived}>
				{isArchived ? (
					<WaveSection>
						<p>
							<strong>From the archives.</strong> This post is one
							of several brief overviews of projects I've designed
							or built in the past which I'm including in my new
							site. Bear in mind that both the work and the
							write-up in these are up to a decade old now!
						</p>
					</WaveSection>
				) : null}
				<h1>{title}</h1>
				<MetaText as="h6" italic>
					<span>{date}</span> • <span>{readingTime.text}</span>
					{mainLinks}
					{extraLinks}
				</MetaText>
			</PostHeader>
			<hr />
			{content}
		</Layout>
	)
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				link
				path
				published
				repo
				subtitle
				title
			}
			fields {
				readingTime {
					text
				}
			}
		}
	}
`

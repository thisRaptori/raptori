import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Link, SEO, WaveSection } from 'src/components'

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
			frontmatter: { date, published, title },
			html,
		},
	},
}) {
	const content = html.split('<waves>').map((chunk, i) =>
		i % 2 ? (
			<WaveSection key={i}>
				<div dangerouslySetInnerHTML={{ __html: chunk }} />
			</WaveSection>
		) : (
			<div key={i} dangerouslySetInnerHTML={{ __html: chunk }} />
		)
	)

	return (
		<Layout>
			<SEO title={title} />
			<h1>{title}</h1>
			<h6>
				{date} • {readingTime.text}
				{published && published.length ? (
					<>
						&nbsp;•&nbsp;
						<Links links={published} />
					</>
				) : null}
			</h6>
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
				path
				title
				published
			}
			fields {
				readingTime {
					text
				}
			}
		}
	}
`

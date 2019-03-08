import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Link, SEO } from 'src/components'

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
			components.push(<Link to={url}>{source}</Link>)
			return components
		}, [])}
		.
	</>
)

export default function Template({ data }) {
	const { markdownRemark } = data
	const { frontmatter, html } = markdownRemark
	const { date, published, title } = frontmatter

	return (
		<Layout>
			<SEO title={title} />
			<h1>{title}</h1>
			<h6>
				{date}
				{published && published.length ? (
					<>
						&nbsp;•&nbsp;
						<Links links={published} />
					</>
				) : null}
			</h6>
			<div dangerouslySetInnerHTML={{ __html: html }} />
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
		}
	}
`

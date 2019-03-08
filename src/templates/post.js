import React from 'react'
import { graphql } from 'gatsby'

export default function Template({ data }) {
	const { markdownRemark } = data
	const { frontmatter, html } = markdownRemark
	return (
		<div className="blog-post-container">
			<div className="blog-post">
				<h1>{frontmatter.title}</h1>
				<pre>{JSON.stringify(frontmatter.published, null, 2)}</pre>
				<div
					className="blog-post-content"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
		</div>
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

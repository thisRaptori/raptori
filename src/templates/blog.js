import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Pagination, PostGrid, PostLink, SEO } from 'src/components'
import { get } from 'src/utils'

const BlogPage = ({ data, pageContext: { currentPage, pageCount } }) => {
	const edges = get(data, 'allMarkdownRemark', 'edges') || []
	return (
		<Layout activePage="blog">
			<SEO title="Blog" />
			<h1>Latest Posts</h1>
			<PostGrid>
				{edges.map(edge => (
					<PostLink key={edge.node.id} post={edge.node} />
				))}
			</PostGrid>
			<Pagination currentPage={currentPage} pageCount={pageCount} />
		</Layout>
	)
}

export default BlogPage

export const pageQuery = graphql`
	query($skip: Int!, $limit: Int!) {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						featuredImage {
							childImageSharp {
								fluid {
									src
								}
							}
						}
						path
						tags
						title
						subtitle
					}
					fields {
						readingTime {
							text
						}
					}
				}
			}
		}
	}
`

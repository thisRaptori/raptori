import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Pagination, PostGrid, PostLink, SEO } from 'src/components'
import { get } from 'src/utils'

const BlogPage = ({ data, pageContext: { currentPage, pageCount } }) => {
	const edges = get(data, 'allMdx', 'edges') || []
	return (
		<Layout activePage="blog">
			<SEO title="Blog" />
			<h1>Latest Posts</h1>
			<PostGrid wide>
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
	query {
		allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
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

import React from 'react'

import { Layout, Link, PostLink, SEO } from 'src/components'

const IndexPage = ({
	data: {
		allMarkdownRemark: { edges },
	},
}) => (
	<Layout
		children={
			<>
				<SEO title="Home" />
				<h1>Hello!</h1>
				<p>
					I'm Joe McGrath, a senior software engineer with a
					background in design, currently working at{' '}
					<Link to="https://www.fanduel.com">FanDuel</Link>. I build
					highly scaleable web apps, contribute to open source, and
					write fiction in my spare time!
				</p>
				<p>
					<Link to="/resume/" button>
						View Resume
					</Link>
				</p>
			</>
		}
		belowTheWaves={
			<>
				<h3>Latest Posts</h3>
				{edges.map(edge => (
					<PostLink key={edge.node.id} post={edge.node} />
				))}
			</>
		}
	/>
)

export default IndexPage

export const pageQuery = graphql`
	query {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						path
						title
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

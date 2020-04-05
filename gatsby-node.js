const path = require('path')

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions

	const blogPostTemplate = path.resolve(`src/templates/post.js`)
	const blogListTemplate = path.resolve(`src/templates/blog.js`)

	return graphql(`
		{
			allMdx(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							path
						}
					}
					next {
						frontmatter {
							title
							path
						}
					}
					previous {
						frontmatter {
							title
							path
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors)
		}

		const posts = result.data.allMdx.edges
		const postsPerPage = 10
		const pageCount = Math.ceil(posts.length / postsPerPage)

		posts.forEach(({ node, next, previous }) => {
			createPage({
				path: node.frontmatter.path,
				component: blogPostTemplate,
				context: {
					next: next && next.frontmatter,
					previous: previous && previous.frontmatter,
				},
			})
		})

		createPage({
			path: '/blog',
			component: blogListTemplate,
		})
	})
}

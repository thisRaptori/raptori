import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ name, ...props }) => (
	<StaticQuery
		query={graphql`
			query {
				images: allFile {
					edges {
						node {
							relativePath
							name
							childImageSharp {
								fluid(maxWidth: 600) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		`}
		render={data => {
			const image = data.images.edges.find(({ node }) => {
				return node.name === name || node.relativePath.includes(name)
			})

			return image ? (
				<Img fluid={image.node.childImageSharp.fluid} {...props} />
			) : null
		}}
	/>
)
export default Image

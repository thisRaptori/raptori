import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { get } from 'src/utils'

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
			const images = get(data, 'images', 'edges') || []
			const image = images.find(({ node }) => {
				return node.name === name || node.relativePath.includes(name)
			})

			return image ? (
				<Img
					fluid={get(image, 'node', 'childImageSharp', 'fluid')}
					{...props}
				/>
			) : null
		}}
	/>
)
export default Image

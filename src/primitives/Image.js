import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { get } from 'src/utils'

const Image = ({ height, name, width, ...props }) => (
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

			const style = {}
			if (width) {
				style.width = width
			}
			if (height) {
				style.height = height
			}

			return image ? (
				<Img
					fluid={get(image, 'node', 'childImageSharp', 'fluid')}
					style={style}
					{...props}
				/>
			) : null
		}}
	/>
)
export default Image

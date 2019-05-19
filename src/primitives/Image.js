import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { get } from 'src/utils'

const Image = ({ height, name, width, style = {}, ...props }) => (
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
									...GatsbyImageSharpFluid_noBase64
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

			const combinedStyles = { ...style }
			if (width) {
				combinedStyles.maxWidth = width
			}
			if (height) {
				combinedStyles.maxHeight = height
			}

			return image ? (
				<Img
					fluid={get(image, 'node', 'childImageSharp', 'fluid')}
					style={combinedStyles}
					{...props}
				/>
			) : null
		}}
	/>
)
export default Image

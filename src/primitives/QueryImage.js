import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Image from './Image'
import { get } from 'src/utils'

const QueryImage = ({ name, ...props }) => (
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

			return <Image image={image.node} {...props} />
		}}
	/>
)
export default QueryImage
